const { FB } = require("fb");

exports.getUser = async (req, res) => {
	const { email } = req.params;
	const { _id, ...user } = await req.db.collection("users").findOne({ email });
	if (user) {
		return res.send({ msg: "User Exists", data: { user } });
	} else {
		return res.send({ msg: "User Does not exist." });
	}
};

exports.getAccounts = async (req, res) => {
	FB.setAccessToken(req.token);
	FB.api("me/accounts", "GET", (_res) => {
		if (_res.data) {
			return res.send({
				msg: "Accounts Fetched",
				data: { accounts: _res.data },
			});
		} else {
			return res.send({ msg: "Some Error Occurred" });
		}
	});
};

exports.getProfile = async (req, res) => {
	const { id } = req.params;
	FB.setAccessToken(req.pageToken);
	FB.api(`/${id}`, "GET", {}, (_res) => {
		if (_res) {
			return res.send({
				msg: "Details Fetched",
				data: { details: _res },
			});
		} else {
			return res.status(500).send({ msg: "Some Error Occurred" });
		}
	});
};
