import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

exports.handler = async (event, context: Context) => {
    const url = "https://icanhazdadjoke.com/";
    const store = getStore('jokes');

    if (Math.random()) {
        const {blobs: jokes} = await store.list();
        return {statusCode: 200, body: JSON.stringify(jokes)};
    } else {
        try {
            const jokeStream = await fetch(url, {headers: {Accept: "application/json"}});
            const jsonJoke = await jokeStream.json();
            return {
                statusCode: 200,
                body: JSON.stringify(jsonJoke)
            }
        } catch (err) {
            return {statusCode: 422, body: err.stack};
        }
    }
};
