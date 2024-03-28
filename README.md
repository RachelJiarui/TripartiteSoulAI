## Tripartite Soul AI

### What is it?

Plato's theory of soul, which was inspired by the teachings of Socrates, considered the psyche (Ancient Greek: ψῡχή, romanized: psūkhḗ, lit. 'breath') to be the essence of a person, being that which decides how people behave. Plato considered this essence to be an incorporeal, eternal occupant of a person's being. Plato said that even after death, the soul exists and is able to think. He believed that as bodies die, the soul is continually reborn (metempsychosis) in subsequent bodies.

Plato divided the soul into three parts:
1. the logos (λογιστικόν), or logistikon, located in the head, is related to reason and regulates the other parts.
2. the thymos (θυμοειδές), or thumoeides, located near the chest region, is related to spirit.
3. the eros (ἐπιθυμητικόν), or epithumetikon, located in the stomach, is related to one's desires.

The just soul is more specifically the soul in which the three parts are correctly ordered, with reason (the rational part) directing the appetitive part with the assistance of the spirited part. In more detail reason rules; the spirited part is angry or indignant at whatever disturbs or threatens reason's rule; and the appetites are kept in check, exercised with a moderation induced or exerted by reason.

In correctly ordered souls different parts may provide the strongest motivation. In some souls, reason provides the strongest, in others the spirited part, and in yet others the appetitive part. But they all are governed by reason in the measure to which reason has been apportioned to them by nature. Reason in the souls in which the appetitive part provides the strongest motivation takes the controlling form of moderation. Where the spirited part most strongly motivates, reason controls in the form of courage or bravery as opposed to foolhardiness or quarrelsomeness.

### How to use it?

At the moment, I have not deployed this project and don't play on deploying this project to an easy-to-use website. These are the following steps I would do if you would like to try this product yourself.

1. Clone this repository
2. Create a .env file in philo-talk-backend
3. Get an Open AI API key
4. Pay like $5 to get usage to this API (this will last you many, many conversations)
5. In the .env file, type in: OPENAI_API_KEY=[insert key]
6. Run the backend by opening a terminal in the same directory /philo-talk-backend, and run `node index.js`
7. Run the frontend by opening a terminal in the same directory /philo-talk-frontend, and run `npm start`
8. If you are missing modules, download them using `npm install [module name]`

### How does it work?

Plato is revived back to life using Open AI Chat GPT. The measurement of your tripartite soul uses primitive natural language processing; it parses user input, and measures user input's biases towards reason, spirit or appetite to give it a score.
