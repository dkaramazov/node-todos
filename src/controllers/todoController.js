import customFetch from "../utils/fetch.js";

const getAll = async (req, res) => {
  let response = await customFetch("/");
  response = await response.json();
  res.send(response.records);
};

const getById = async (req, res) => {
  let response = await customFetch(`/${req.params.id}`);
  response = await response.json();  
  res.send({ ...response});
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
