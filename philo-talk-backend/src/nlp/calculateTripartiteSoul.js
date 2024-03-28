const { fetchTripartiteSoul } = require('.././fetchTripartiteSoul');
const { updateTripartiteSoul } = require('.././updateTripartiteSoul');
const { keyWords } = require('./tripartiteKeyWords');
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const porterStemmer = natural.PorterStemmer;
const THRESHOLD = 0.3; // Arbitrary threshold number

/*
Must return the tripartite form in this form:
{ reason: currTripartite["reason"] + #, spirit: currTripartite["spirit"] + #, eros: currTripartite["eros"] + #}
*/
async function calculateTripartiteSoul(msg) {
  const currTripartite = await fetchTripartiteSoul();
  console.log("Message to calculate: " + msg)

  // Parse the message
  const tokens = tokenizer.tokenize(msg);
  const lowerCaseTokens = tokens.map(t => t.toLowerCase());
  console.log("Made lowercase: " + lowerCaseTokens)

  // Assuming a simple removeStopWords function is implemented or available
  const cleanedTokens = removeStopWords(lowerCaseTokens);
  console.log("Removed stopwords: " + cleanedTokens)
  cleanedTokens.map(t => {
    porterStemmer.stem(t)
  })
  console.log("cleanedTokens: " + cleanedTokens);

  // Natural's JaroWinkler distance can be used for similarity, but it might not fully replace LexicalDiversity
  const JaroWinkler = natural.JaroWinklerDistance;

  const tripartiteSoul = ["reason", "spirit", "eros"];
  const tripartiteSoulDiff = {
    "reason": 0,
    "spirit": 0,
    "eros": 0
  };

  for (let i = 0; i < 3; i += 1) {
    let part = tripartiteSoul[i];
    keyWords[part].forEach(kw => {
      cleanedTokens.forEach(t => {
        let similarity = JaroWinkler(kw, t);
        console.log("Similarity between " + t + " and " + kw + " is: " + similarity);
        if (similarity > THRESHOLD) {
          tripartiteSoulDiff[part] += similarity;
        }
      });
    });
  }

  console.log("New tripartite soul: ")
  const lenTokens = cleanedTokens.length;
  const newTripartiteSoul = {
    reason: Math.round((currTripartite["reason"] + tripartiteSoulDiff["reason"])/lenTokens),
    spirit: Math.round((currTripartite["spirit"] + tripartiteSoulDiff["spirit"])/lenTokens),
    eros: Math.round((currTripartite["eros"] + tripartiteSoulDiff["eros"])/lenTokens)
  }
  console.log(JSON.stringify(newTripartiteSoul))
  // Update the tripartite soul accordingly
  return await updateTripartiteSoul(newTripartiteSoul);
}

function removeStopWords(tokens) {
  // Simple stop words removal example. You might need a list of stop words.
  const stopWords = ['and', 'or', 'but', 'because', 'is', 'how', 'do', 'what', 'where', 'why', 'if', 'can', 'be', 'could', 'would', 'a', 'an', 'as', 'me', 'my', 'mine', 'own', 'at', 'for', 'by', 'in', 'into', 'it', 'no', 'not', 'of', 'on', 'such', 'that', 'the', 'their', 'then', 'there', 'these', 'they', 'these', 'this', 'to', 'was', 'will', 'with', 'she', 'her', 'hers', 'him', 'his', 'he'];
  return tokens.filter(token => !stopWords.includes(token));
}

module.exports = { calculateTripartiteSoul };
