
//Require modules
const express = require('express');

//Create the Express app
const app = express();

//Configure the app (app.set)
const fs = require('fs') // require fs module
app.engine('hypatia', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'hypatia') // register the hypatia view engine



// Mount middleware (app.use)

// Mount routes
//route 1
app.get('/', (req, res) => {
  res.render('template', { title: 'Welcome', message: 'Hi!', content: 'My name is T. My favorite color is Black. My favorite city is New York. I am a Per Scholas student.' })
})

//route 2
app.get('/thanks', (req, res) => {
  res.render('template', { title: 'Thanks', message: 'Nice to meet you!', content: 'Thanks for coming to my app.' })
})
//route 3
app.get('/learning', (req, res) => {
  res.render('template', { title: 'Learning', message: 'A Little Bit About the Course', content: 'Per Scholas is an intense course that will help us learn web development skils.' })
})

//route 4
app.get('/instructors', (req, res) => {
  res.render('template', { title: 'Our Instructors', message: 'Our Fearless Leaders', content: 'Our instructors are Tishana, Christina, and Oussama.' })
})

//route 5
app.get('/build', (req, res) => {
  res.render('template', { title: 'What We Are Building', message: 'More About the Course', content: 'We will learn to build apps that render  API data in the browser.' })
})

//route 6
app.get('/frameworks', (req, res) => {
  res.render('template', { title: 'Frameworks', message: 'About Frameworks', content: 'Express.js framework allows use to reuse code easily.' })
})


//route 7
app.get('/portfolio', (req, res) => {
  res.render('template', { title: 'Portfolio', message: 'The Portfolio: Showcase Our Work', content: 'Eventually, we will build a portfolio with apps.' })
})


//route 8
app.get('/apps', (req, res) => {
  res.render('template', { title: 'The Apps', message: 'About The Apps', content: 'We will learn to build apps that render  API data in the browser.' })
})

//route 9
app.get('/money', (req, res) => {
  res.render('template', { title: '$$$', message: 'Get this Money!', content: 'Then comes the software $$$' })
})

//route 10
app.get('/almostdone', (req, res) => {
  res.render('template', { title: 'Almost Done!', message: 'Youre Almost Done!', content: 'TL;DR: This is my homework for Per Scholas' })
})

//route 11
app.get('/end', (req, res) => {
  res.render('template2', { title: 'The End/Fun Fact', message: 'Bye!', funfact:'I love alpacas', content: 'You made it through to the end. Thanks for reading' })
})

//Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
 });


