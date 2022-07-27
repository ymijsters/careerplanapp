const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const Profile = require("../../models/Profile");
const Goal = require("../../models/Goal");

// @Route  GET api/goal
// @Desc   Get goals from profile
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    if (!profile) {
      return res.status(400).json({
        msg: "There is no profile for this user. First create a profile before making goals.",
      });
    }

    const goals = await Goal.find({ profile: profile.id });

    if (!profile) {
      return res.status(400).json({
        msg: "No goals were found for this profile.",
      });
    }

    res.json(goals);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

//@route   POST api/goal/addgoals
//@desc    Create or update user profile
//@access  Private
router.post(
  "/addgoals",
  [
    auth,
    [
      check("goals", "No goals submitted or a goal misses its name")
        .isArray()
        .notEmpty()
        .existsInArray("name"),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    return res.status(200).json({ success: "Goals successfully received" });

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

module.exports = router;
