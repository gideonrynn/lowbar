
let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/lowbar", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

let barSeed = [
    {
        taskName: "Clean fish tanks",
        category: "",
        details: "",
        note: "Need to order more cleaner",
        lastComplete: "4/21/2020",
        allCompleted: ["4/1/2020", "3/15/2020", "2/15/2020"],
        taskFrequency: "weekly"
    },
    {
        taskName: "Clean shower",
        category: "bathroom",
        details: "",
        note: "need more spray",
        lastComplete: "4/1/2020",
        allCompleted: ["4/1/2020", "3/15/2020", "2/15/2020"],
        taskFrequency: "monthly"
    },
    {
        taskName: "Clean sink",
        category: "bathroom",
        details: "",
        note: "need more spray",
        lastComplete: "4/1/2020",
        allCompleted: ["4/1/2020", "3/15/2020", "2/15/2020"],
        taskFrequency: "monthly"
    },
    {
        taskName: "Clean toilet",
        category: "bathroom",
        details: "",
        note: "Drain cleaner",
        lastComplete: "2/10/2020",
        allCompleted: ["3/15/2020", "3/1/2020", "2/1/2020", "11/12/2019"],
        taskFrequency: "monthly"
    },
    {
        taskName: "Vaccuum/sweep room",
        category: "bedroom",
        details: "",
        note: "",
        lastComplete: "",
        allCompleted: ["3/20/2020", "2/8/2020", "12/5/2019"],
        taskFrequency: "weekly"
    },
    {
        taskName: "Laundry",
        category: "bedroom",
        details: "",
        note: "order detergent",
        lastComplete: "4/21/2020",
        allCompleted: ["4/16/2020", "4/10/2020", "4/1/2020"],
        taskFrequency: "weekly"
    },
    {
        taskName: "Vacuum",
        category: "living room",
        details: "",
        note: "",
        lastComplete: "4/21/2020",
        allCompleted: ["4/16/2020", "4/10/2020", "4/1/2020"],
        taskFrequency: "weekly"
    },
    {
        taskName: "Clean oven",
        category: "kitchen",
        details: "",
        note: "",
        lastComplete: "4/1/2020",
        allCompleted: [],
        taskFrequency: "monthly"
    },
    {
        taskName: "Wipe down bookshelves",
        category: "all",
        details: "",
        note: "",
        lastComplete: "1/1/2020",
        allCompleted: [],
        taskFrequency: "monthly"
    },
    {
        taskName: "Wipe down tabletops",
        category: "all",
        details: "",
        note: "",
        lastComplete: "9/1/2019",
        allCompleted: [],
        taskFrequency: "monthly"
    },
    {
        taskName: "Disinfect humidifier",
        category: "kitchen",
        details: "",
        note: "",
        lastComplete: "4/1/2020",
        allCompleted: [],
        taskFrequency: "monthly"
    },

];



db.Bar.deleteMany({})
.then(() => db.Bar.collection.insertMany(barSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
