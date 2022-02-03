import GymDetails from "../models/gymDetailsModel.js";
import asyncHandler from "express-async-handler";
// some parts of this code are for server and some for controller
// app.get("/restaurants/search", async (req, res) => {
//   const { resName } = req.query;

//   const restaurants = await Restaurant.find({ $text: { $search: resName } });

//   res.render("restaurants", { restaurants });
// });

const createGymDetail = asyncHandler(async (req, res) => {
  const {
    gym_comany_name,
    name,
    phone,
    email,
    date_of_joining,
    profile_pic_url,
  } = req.body;

  const gymDetailsExist = await User.findOne({ email });

  if (gymDetailsExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const gymDetail = await GymDetails.create({
    gym_comany_name,
    name,
    phone,
    email,
    date_of_joining,
    profile_pic_url,
  });

  if (gymDetail) {
    res.status(201).json({
      gymDetail,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getGymDetailById = asyncHandler(async (req, res) => {
  const gymDetail = await GymDetails.findById(req.params.id);

  if (gymDetail) {
    res.json({ gymDetail });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const editGymDetail = asyncHandler(async (req, res) => {
  const gymDetail = await User.findById(req.gymDetail._id);

  if (gymDetail) {
    gymDetail.gym_comany_name =
      req.body.gym_comany_name || gymDetail.gym_comany_name;
    gymDetail.name = req.body.name || gymDetail.name;
    gymDetail.phone = req.body.phone || gymDetail.phone;
    gymDetail.email = req.body.email || gymDetail.email;

    gymDetail.date_of_joining =
      req.body.date_of_joining || gymDetail.date_of_joining;

    gymDetail.profile_pic_url =
      req.body.profile_pic_url || gymDetail.profile_pic_url;

    const updatedUser = await user.save();

    res.json({
      updatedUser,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getGymsDetails = asyncHandler(async (req, res) => {
  const GymsDetails = await GymDetails.find({});
  res.json(GymsDetails);
});

const searchGymName = asyncHandler(async (req, res) => {
  const { resName } = req.query;

  // http://localhost:5000/api/gymDetails/search?resName=activessss
  console.log(resName) 
  // this workings

  const gymDeatail = await GymDetails.find({ $text: { $search: resName } });

  res.json( gymDeatail );

  // const status = err.status || 500;
  // res.status(status);
  // res.render("error");  
});

export {
  getGymsDetails,
  getGymDetailById,
  editGymDetail,
  createGymDetail,
  searchGymName,
};
