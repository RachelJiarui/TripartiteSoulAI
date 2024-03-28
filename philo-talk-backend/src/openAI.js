require('dotenv').config();

const OpenAI = require("openai").default;
const openai = new OpenAI(process.env.OPENAI_API_KEY);

// example of what prompt could look like
/*
[
  {
    _id: '65f4cc5d024bfe864b3ee97c',
    text: 'A',
    uid: '1710541917270',
    speaker: 'User',
    __v: 0
  }
]
*/
async function generateText(prompt) {
  goodResp = false
  fineTuning = ""
  while (!goodResp) {
    messages = [{ role: "system", content: "Pretend and speak as if you are Plato. Speak in first-person."}]

    if (fineTuning.length != 0) {
      messages.push([{ role: "assistant", content: findTuning }])
      fineTuningMsg = [{ role: "user", content: "Your response was not in first-person. Speak in first-person."}]
      messages.push(fineTuningMsg)
    } else {
      for (const item of prompt) {
        userMsg = { role: "user", content: item.speaker + ": " + item.text}
        messages.push(userMsg)
      }
    }

    console.log('Sending this to OPENAI: ' + JSON.stringify(messages))
    const completion = await openai.chat.completions.create({
      messages: messages,
      model: "gpt-3.5-turbo",
    });
    result = completion.choices[0].message.content
    console.log("Resulting from OPENAI: " + result);

    if (result.indexOf("I " !== -1)) {
      goodResp = true
    } else {
      console.log("Hit bad response, trying again...")
      fineTuning = result
    }
  }
  return result
}

module.exports = { generateText };