import express from "express";
import ExperiencesController from "../controllers/experiences.controller";
import { nonEmptyString, validateInputs } from "../utils/validation.utils";
import { body } from "express-validator";

const experiencesRouter = express.Router();
experiencesRouter.get("/", ExperiencesController.getExperiences);
experiencesRouter.post(
  "/new",
  nonEmptyString(body("title")),
  nonEmptyString(body("description")),
  nonEmptyString(body("companyName")),
  nonEmptyString(body("location")),
  validateInputs,
  ExperiencesController.createExperience
);

export default experiencesRouter;
