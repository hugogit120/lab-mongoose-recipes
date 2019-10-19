const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const data = require('./data.js');
const Recipe = require('./models/Recipe');


mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

/*Recipe.create({ title: 'pizza', level: 'Easy Peasy', cuisine: 'Italian'})
      .then(recipe => {console.log(`the ${recipe.title} recipe was created`)})
      .catch(err => {console.log(`an error ocurred ${err} `)
    });*/

/*Recipe.insertMany(data)
    .then(recipes => {console.log(`this is ${recipes}`)})
    .catch(err => {console.log(`an error ocurred ${err}`)
  });*/

/*Recipe.findOneAndUpdate({ title: "Rigatoni alla Genovese"}, {duration : 100}, {new: true}, (err, doc) => {
      if(err){
        console.log('something went wrong')
      } else {
        console.log(doc)
      }
})*/

/*Recipe.remove({ title: "pizza"}, (err, doc) => {
  if (err) {
      console.log('something went wrong')
  } else {
      console.log(`${doc} was removed`)
  }
})*/

mongoose.connection.close()