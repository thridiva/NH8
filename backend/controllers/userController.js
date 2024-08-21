const User = require("./../models/userModel.js");
const createError = require("./../utils/createError.js");
const handleAsyncFunc = require("./../utils/handleAsyncFunc");

// Functions

const getAllUsersDataFunc = async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    results: users.length,
    requestedtime: req.timeNow,
    users,
  });
};

exports.getAllUsersData = (req, res, next) =>
  handleAsyncFunc(getAllUsersDataFunc, req, res, next);

exports.getOneUserData = (req, res, next) => {
  let user = data.find((num) => num.id == req.params.id * 1);

  if (!user) return next(createError(`Invalid id, Cannot find user`, 404));

  res.status(200).json({
    status: "success",
    userData: {
      user,
    },
  });
};

exports.checkBody = (req, res, next) => {
  const requiredFields = [
    "userName",
    "email",
    "password",
    "confirmPassword",
    "phoneNumber",
  ];
  const missingField = requiredFields.find((field) => !req.body[field]);

  if (missingField)
    return next(
      createError(
        `Missing ${
          missingField.charAt(0).toUpperCase() + missingField.slice(1)
        }`,
        404
      )
    );

  next();
};

//POST
exports.createUser = async (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Please use signup Path",
  });
};

exports.editUserData = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      userData: "Updated Data",
    },
  });
};

exports.deleteUserData = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
