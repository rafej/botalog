# botalog

A public index of Facebook Messenger bots.

## Getting your bot on the list

Are you developing a cool Facebook messenger bot and want it on botalog? Awesome, we do too.

**The easy way:** [Create an issue following the template](https://github.com/rafej/botalog/issues/new)

**The hard way:** If you feel like editing some JSON yourself, add your bot following the schema down below to [bots.json](https://github.com/rafej/botalog/blob/gh-pages/api/v1/bots.json)

### Schema (AKA what does a bot look like)

```json
{
  "name": "The Mad Botter",
  "link": "A link to the relevant page",
  "chat_id": "some_amount_of_numbers",
  "author": "The Mad Hatter",
  "author_link": "http://twitter.com/themadhatteryo",
  "description": "A mad bot for ordering the hippy hoppy hippiest of hats.",
  "rating": 7,
  "categories": [
    "on_demand",
    "productivity",
    "fun"
  ],
  "tags": [
    "hats",
    "hip",
    "i love hats"
  ]
}
```
