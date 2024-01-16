import fetch from "node-fetch";

fetch.Headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
};

fetch.baseURL = process.env.AIRTABLE_API_LOCATION;

const getAll = async (req, res) => {
  let response = await fetch(
    "https://api.airtable.com/v0/app4GVG5QETa94mUJ/tblgBZNGKlwS0RygH/",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
    }
  );
  response = await response.json();
  res.send(response.records);
};

const getById = async (req, res) => {
  res.send({ todo });
};

const create = async (req, res) => {
  res.send({ todo });
};

const update = async (req, res) => {
  res.send({ todo });
};

const remove = async (req, res) => {
  res.send({ success });
};

export { getAll, getById, create, update, remove };
