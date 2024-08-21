const Item = require("./../models/itemsModel");
const createError = require("./../utils/createError.js");
const handleAsyncFunc = require("./../utils/handleAsyncFunc");

const createItemFunc = async (req, res, next) => {
  const { name, price, description, category, itemRemaining } = req.body;

  const item = await Item.create({
    name,
    price,
    description,
    category,
    itemRemaining,
  });

  res.status(201).json({
    status: "success",
    data: {
      item,
    },
  });
};

const getAllItemsFunc = async (req, res, next) => {
  const items = await Item.find();

  if (!items) return next(createError("No Items Found! Please Add Items"));

  res.status(200).json({
    status: "success",
    results: items.length,
    data: {
      items,
    },
  });
};

const getItemFunc = async (req, res, next) => {
  const item = await Item.findById(req.params.id);

  if (!item) return next(createError("No Item Found! Please re-check the id"));

  res.status(201).json({
    status: "success",
    data: {
      item,
    },
  });
};

const updateItemFunc = async (req, res, next) => {
  const id = req.params.id;
  if (!id) return next(createError("Please Enter the id"));

  const updatedItem = await Item.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    status: "success",
    data: {
      item: updatedItem,
    },
  });
};

const deleteItemFunc = async (req, res, next) => {
  const item = await Item.findById(req.params.id);

  if (!item)
    return next(
      createError("No item found! Please re-check what item to delete")
    );

  await Item.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
};

// CRUD = CREATE READ UPDATE DELETE

//CREATE
exports.createItem = (req, res, next) =>
  handleAsyncFunc(createItemFunc, req, res, next);

//READ
exports.getAllItems = (req, res, next) =>
  handleAsyncFunc(getAllItemsFunc, req, res, next);

exports.getItem = (req, res, next) =>
  handleAsyncFunc(getItemFunc, req, res, next);

//UPDATE
exports.updateItem = (req, res, next) =>
  handleAsyncFunc(updateItemFunc, req, res, next);

//DELETE
exports.deleteItem = (req, res, next) =>
  handleAsyncFunc(deleteItemFunc, req, res, next);
