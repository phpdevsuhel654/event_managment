const express = require("express");
const venueController = require("../controllers/venueController")
const venueRouter = express.Router();

venueRouter.route("/").post(venueController.add);
venueRouter.route("/").get(venueController.get_all);
venueRouter.route("/:id").get(venueController.get_by_id);
venueRouter.route("/:id").put(venueController.update);
venueRouter.route("/:id").delete(venueController.delete_by_id);

module.exports = venueRouter;