const { Router: expressRouter } = require("express");
const router = expressRouter();

// auth routes
const authRouter = require("./authRoutes");
router.use("/auth", authRouter);

// venue routes
const venueRouter = require("./venueRoutes");
router.use("/venue", venueRouter);

module.exports = router;