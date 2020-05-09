
let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/lowbar", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

let taskSeed = [
    {
        taskName: "Clean fish tanks",
        category: "",
        details: "",
        note: "Pick a few tasks, Need to order more cleaner",
        lastComplete: "04/21/2020",
        allCompleted: ["4/1/2020", "3/15/2020", "2/15/2020"],
        taskFrequency: "weekly"
    },
    {
        taskName: "Clean shower",
        category: "bathroom",
        details: "",
        note: "need more spray",
        lastComplete: "04/1/2020",
        allCompleted: ["4/1/2020", "3/15/2020", "2/15/2020"],
        taskFrequency: "monthly"
    },
    {
        taskName: "Clean sink",
        category: "bathroom",
        details: "",
        note: "need more spray",
        lastComplete: "04/1/2020",
        allCompleted: ["4/1/2020", "3/15/2020", "2/15/2020"],
        taskFrequency: "monthly"
    },
    {
        taskName: "Scrub toilet",
        category: "bathroom",
        details: "",
        note: "Drain cleaner",
        lastComplete: "02/10/2020",
        allCompleted: ["3/15/2020", "3/1/2020", "2/1/2020", "11/12/2019"],
        taskFrequency: "monthly"
    },
    {
        taskName: "Vacuum/sweep room",
        category: "bedroom",
        details: "",
        note: "",
        lastComplete: "",
        allCompleted: ["03/20/2020", "2/8/2020", "12/5/2019"],
        taskFrequency: "weekly"
    },
    {
        taskName: "Laundry",
        category: "bedroom",
        details: "",
        note: "order detergent",
        lastComplete: "04/21/2020",
        allCompleted: ["4/16/2020", "4/10/2020", "4/1/2020"],
        taskFrequency: "weekly"
    },
    {
        taskName: "Vacuum",
        category: "living room",
        details: "",
        note: "",
        lastComplete: "04/21/2020",
        allCompleted: ["4/16/2020", "4/10/2020", "4/1/2020"],
        taskFrequency: "weekly"
    },
    {
        taskName: "Clean oven",
        category: "kitchen",
        details: "",
        note: "",
        lastComplete: "04/01/2020",
        allCompleted: [],
        taskFrequency: "monthly"
    },
    {
        taskName: "Wipe down bookshelves",
        category: "all",
        details: "",
        note: "",
        lastComplete: "01/01/2020",
        allCompleted: [],
        taskFrequency: "monthly"
    },
    {
        taskName: "Wipe down tabletops",
        category: "all",
        details: "",
        note: "",
        lastComplete: "09/01/2019",
        allCompleted: [],
        taskFrequency: "monthly"
    },
    {
        taskName: "Disinfect humidifier",
        category: "kitchen",
        details: "",
        note: "",
        lastComplete: "04/01/2020",
        allCompleted: [],
        taskFrequency: "monthly"
    },
    {
        taskName: "Clean light switches",
        category: "all",
        details: "",
        note: "",
        lastComplete: "04/01/2020",
        allCompleted: [],
        taskFrequency: "monthly"
    },
    {
        taskName: "Swiffer floor",
        category: "all",
        details: "",
        note: "",
        lastComplete: "04/29/2020",
        allCompleted: [],
        taskFrequency: "monthly"
    },
    {
        taskName: "Wash and store dishes",
        category: "kitchen",
        details: "",
        note: "",
        lastComplete: "",
        allCompleted: [],
        taskFrequency: "daily"
    },
    {
        taskName: "Make bed",
        category: "bedroom",
        details: "",
        note: "",
        lastComplete: "",
        allCompleted: [],
        taskFrequency: "monthly"
    },
    {
        taskName: "Put away clothes",
        category: "all",
        details: "",
        note: "",
        lastComplete: "",
        allCompleted: [],
        taskFrequency: "weekly"
    },
    {
        taskName: "Clear out fridge",
        category: "kitchen",
        details: "",
        note: "",
        lastComplete: "04/18/2020",
        allCompleted: [],
        taskFrequency: "biweekly"
    },


];



db.Task.deleteMany({})
.then(() => db.Task.collection.insertMany(taskSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
