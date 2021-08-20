const express = require("express");
const router = express.Router();
const {
	verifyWebhook,
	addWebhook,
	sendMessage,
} = require("../controllers/messengerController");
const { getDatabase } = require("../middlewares/databaseMiddleware");
const { getPageToken } = require("../middlewares/pageTokenMiddleware");
const { getToken } = require("../middlewares/tokenMiddleware");

router.post("/", addWebhook);
router.get("/", verifyWebhook);
router.post(
	"/:email/send_message",
	getDatabase,
	getToken,
	getPageToken,
	sendMessage,
);

module.exports = router;
