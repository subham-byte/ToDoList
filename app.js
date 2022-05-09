const express = require("express")
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const date = require(__dirname + "/date.js");

// console.log(date());


const app = express();
app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static("public"));

let items = ["Buy Food", "Cook Food", "Eat Food"];


app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // res.send("Hello");

    // let today = new Date();
    // let currentDay = today.getDay();
    // let day = "";

    // if(currentDay === 6 || currentDay === 0){
    //     day = "Weekend";
    //     // res.write("<h1>Yay! it's the weekend.</h1>");
    // } else {
    //     // res.write("<p>It is not the weekend</p>")
    //     // res.write("<h1>Boo! I have to work!</h1>");
    //     // res.send();
    //     // res.sendFile(__dirname + "/index.html");
    //     day = "WeekDay";
    // }

    //     switch (currentDay){
    //         case 0:
    //             day = "Sunday";
    //             break;
    //         case 1:
    //             day = "Monday";
    //             break;
    //         case 2:
    //             day = "Tuesday";
    //             break;
    //         case 3:
    //             day = "Wednesday";
    //             break;
    //         case 4:
    //             day = "Thrusday";
    //             break;
    //         case 5:
    //             day = "Friday";
    //             break;
    //         case 6:
    //             day = "Saturday";
    //             break;
    //         default:
    //             console.log("Error: current day is equal to:" + currentDay);
    //     }
    // let options = {
    //     weekday: "long",
    //     day: "numeric",
    //     month: "long"
    // };
    // let day = today.toLocaleDateString("en-US", options);

        let day = date.getDate();

        res.render("list", {kindOfDay: day, newListItems: items});
    });

    app.get("/about", (req, res)=>{
        res.render("about")
    });

    app.post("/", (req, res)=>{
        let item = req.body.newItem;
        items.push(item);
        // res.render("list", {newListItem: item});

        res.redirect("/");
    });


    app.listen(3000, () => {
        console.log("Server started on port 3000...");
    });