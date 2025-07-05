import { getStore } from "@netlify/blobs";

export default async (req, ctx) => {
    const store = getStore('jokes');
    const url = 'https://icanhazdadjoke.com/';

    if (Math.random()) {
        const {blobs: jokes} = await store.list();
        return new Response(JSON.stringify(jokes));
    } else {
        try {
            const jokeStream = await fetch(url, {headers: {Accept: "application/json"}});
            const jsonJoke = await jokeStream.json();
            return new Response(JSON.stringify(jsonJoke));
        } catch (err) {
            return {statusCode: 422, body: err.stack};
        }
    }
}
