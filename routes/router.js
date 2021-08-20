const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const messengerRouter = require("./messenger");

router.use("/ping", (req, res) => {
	res.status(200).send({ msg: "Server is Working!" });
});

router.use("/user", userRouter);
router.use("/webhook", messengerRouter);

module.exports = router;
