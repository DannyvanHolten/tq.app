# Exercise 2: Search API

The development server has `/products` endpoint that takes a `q` parameter:

- `http://localhost:3001/products?q=<SEARCH_TERM>`

```
# GET http://localhost:3001/products?q=sagrada+familia

[
  {
    "productUrl": "...",
    "image": "...",
    "id": 918256,
    "title": "Sagrada Familia: Fast Track",
    "price": 17,
    "summary": "..."
  }
]
```

(Note that the endpoint connects to port `3001`).

The file `api/search.js` contains a function called `fetchSearchResults()`. Your task is to implement this function.

- The function takes one argument: `query`. The argument must have type `string`.
- The function should return a `Promise`-like object.
- If no query is passed or if the query is empty, the `Promise` must resolve to an empty array `[]`.
- If a query is passed, the function must perform a search against the endpoint and return the results.

The file `api/search.spec.js` contains already tests for these requirements. You can run the tests with the following command:

    $ yarn test

To enable each test, rename the `xit` calls to `it`.

## Things to consider

- ~~How should the function handle error cases? For example: what happens if the server is down?~~ __Never break the front-end. If it's not the primary thing of the website (for example, prices come from a different service than the products) you just don't show them but still show the products. Hopefully the price will pop-up again when they're ready to order. If it is the primary data of the page: show a nice error page.__
~~- What happens if the search comes empty? Is that an error or a normal case? Why?~~ __I chose to prevent the submitting of the form while it's empty next to other checks__
