import express from "express";
const router = express.Router();
import {
  getGymsDetails,
  getGymDetailById,
  editGymDetail,
  createGymDetail,
  searchGymName,
} from "../controllers/gymDetailsControllers.js";

router.route("/").post(createGymDetail).get(getGymsDetails);

router.route("/search").get(searchGymName);

router
  .route("/:id")
  // .delete(deleteGymDetail)
  .get(getGymDetailById)
  .put(editGymDetail);

export default router;
