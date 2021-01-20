const mongoose = require('mongoose');

const Book = require('./models/book');

//connect moongoose to the server
mongoose.connect('mongodb://localhost:27017/bookbazaar', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

Book.deleteMany();

const seedProducts = [
    {
        title: "Pragmatic Programmer", 
        author: "Andy Hunt and Dave Thomas",
        price: 1999,
        year: 1999,
        description: "A book about good programming practices.",
        genre: "Self help",
        image: '/images/pragmatic-programmer.jpg'
    },
    {
        title: "The Godfather", 
        author: "Mario Puzo",
        price: 182,
        year: 1969,
        description: "Mafia. Gangs. Wars. And obiously, Don Corleone.",
        genre: "Fiction",
        image: '/images/godfather.png'
    },
    {
        title: "Black Beauty", 
        author: "Anna Sewell",
        price: 179,
        year: 1877,
        description: "Live the life of a 18th century horse in this classic by Sewell.",
        genre: "Fiction",
        image: '/images/black-beauty.jpg'
    },
    {
        title: "A Study in Scarlet", 
        author: "Arthur Conan Doyle",
        price: 136,
        year: 1887,
        description: "It's elementary my dear Watson.",
        genre: "Fiction",
        image: '/images/study-in-scarlet.jpg'
    },
    {
        title: "The Da Vinci Code", 
        author: "Dan Brown",
        price: 259,
        year: 2003,
        description: "Feel the thrill as Robert Langdon embarks on a new and exciting journey to uncover the secrets of the world.",
        genre: "Fiction",
        image: '/images/da-vinci.jpg'
    }
]

Book.insertMany(seedProducts);