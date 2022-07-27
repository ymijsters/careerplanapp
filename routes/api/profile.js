const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @Route  GET api/profile
// @Desc   Get profile from user
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["email"]
    );

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

//@route   POST api/profile
//@desc    Create or update user profile
//@access  Private
router.post(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      currentCompany,
      unemployed,
      currentFunction,
      ambitionStatement,
    } = req.body;

    const profileFields = {};
    profileFields.user = req.user.id;
    if (name) profileFields.name = name;
    if (currentCompany || unemployed)
      profileFields.currentCompany = currentCompany;
    if (unemployed != profileFields.unemployed)
      profileFields.unemployed = unemployed;
    if (currentFunction || unemployed)
      profileFields.currentFunction = currentFunction;
    if (ambitionStatement) profileFields.ambitionStatement = ambitionStatement;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        //update profile
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }
      //New Profile
      profile = new Profile(profileFields);
      await profile.save();

      res.json(profile);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error: " + err.message);
    }
  }
);

//@route   POST api/profile/ambition
//@desc    Create or update user profile
//@access  Private
router.post("/ambition", [auth], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { ambitionStatement } = req.body;

  const profileFields = {};
  profileFields.user = req.user.id;
  if (ambitionStatement) profileFields.ambitionStatement = ambitionStatement;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      //update profile
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );

      return res.json(profile);
    } else {
      return res
        .status(400)
        .json({ errors: [{ msg: "First create a profile for this user" }] });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error: " + err.message);
  }
});

//@route   DELETE api/profile
//@desc    Delete profile and user
//@access  Private
router.delete("/", auth, async (req, res) => {
  try {
    //@TODO Remove Goals etc.

    //remove profile
    await Profile.findOneAndRemove({ user: req.user.id });

    //remove user
    await User.findOneAndRemove({ _id: req.user.id });

    return res.send("User Deleted");
  } catch (err) {
    console.log(err.message);
    res.json(500).send("System Error");
  }
});

module.exports = router;
