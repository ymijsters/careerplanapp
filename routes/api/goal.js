const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const Profile = require("../../models/Profile");
const Goal = require("../../models/Goal");
const StockGoal = require("../../models/StockGoal");

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
      check("goals", "No goals submitted or a goal misses its name").custom(
        (value) => {
          if (!Array.isArray(value)) return false;
          if (value.length == 0) return false;
          //Not working yet!
          for (let i = 0; i < value.length; i++) {
            if (!("name" in value[i])) {
              return false;
            }
          }
          return true;
        }
      ),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { goals } = req.body;

    try {
      let goalResult = [];

      let profile = await Profile.findOne({ user: req.user.id });

      if (!profile) {
        return res.status(400).json({
          msg: "There is no profile for this user. First create a profile before making goals.",
        });
      }

      for await (const goal of goals) {
        const { name, description, duedate, color, stockgoalId } = goal;

        const goalFields = {};
        goalFields.profile = profile.id;
        if (name) goalFields.name = name;
        if (description) goalFields.description = description;
        if (duedate) goalFields.duedate = duedate;
        if (color) goalFields.color = color;
        if (stockgoalId) {
          let stockgoal = await StockGoal.findById(stockgoalId);
          if (!stockgoal) {
            return res.status(400).json({
              msg: "An incorrect standard goal was submitted.",
            });
          }
          goalFields.stockgoal = stockgoalId;
        }

        const existingGoals = await Goal.find({
          name: goalFields.name,
          profile: goalFields.profile,
        });

        if (existingGoals.length > 0) {
          return res.status(400).json({
            msg: "There cannot be multiple goals with the same name for one user.",
          });
        }

        let newGoal = new Goal(goalFields);
        await newGoal.save();
        goalResult.push(newGoal);
      }

      res.json(goalResult);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error: " + err.message);
    }
  }
);

module.exports = router;
