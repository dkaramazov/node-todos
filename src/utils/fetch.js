import fetch from "node-fetch";
import { config } from "dotenv";

config();

const createCustomFetch = (baseURI, defaultHeaders) => {
  return (url, options = {}) => {
    const fullURL = new URL(`${baseURI}${url}`);

    return fetch(fullURL, {
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
      ...options,
    });
  };
};

const customFetch = createCustomFetch(process.env.AIRTABLE_API_LOCATION, {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
});

export default customFetch;
