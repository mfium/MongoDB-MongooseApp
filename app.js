const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});


const fruitSchema = new mongoose.Schema({

    name: String,
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String

});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: 'Apple',
    rating: 38,
    review: "good fruit"
});

// fruit.save();

// const kiwi = new Fruit({
//     name: 'kiwi',
//     rating: 9,
//     review: "yummies"
// });

// const orange = new Fruit({
//     name: 'orange',
//     rating: 19,
//     review: "yahooo"
// });

// const banana = new Fruit({
//     name: 'banana',
//     rating: 239,
//     review: "too good"
// });

// Fruit.insertMany([kiwi,orange,banana]).then (function (){
//     console.log("Success added");
// }) .catch(function (err) {
//     console.log(err);
//     });

Fruit.find()
    .then(function (fruits) {
        fruits.forEach(function(fruit){
            console.log(fruit.name);

            mongoose.connection.close();
        });

    })

    .catch(function (err) {
        console.log(err);

    });

// Fruit.deleteOne({name: "loose"})
//     .then(result => {mongoose.connection.close()
//     console.log(result);
// })

//     .catch(err => {
//         console.log(err);
//     })

// const personSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//     name: 'John',
//     age: 34
// });

// person.save();

// const randomSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     loots: Number
// });

// const Random = mongoose.model("Random", randomSchema);

// const boxer = new Random({
//     name: 'test',
//     age: 33,
//     loots: 44
// });



