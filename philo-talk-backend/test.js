require('dotenv').config();

const OpenAI = require("openai").default;

const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "Pretend and speak as if you are Plato."},
      { role: "user", content: "Should I desire things?"}
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();