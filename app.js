const express   = require('express'),
      mysql     = require('mysql'),
      hbs       = require('hbs');

    const app = express()
    app.listen(3000)
    console.log('Connected to port 3000.')

    app.use(express.static('public'));
    app.set('view engine', 'hbs');

    //Views
        //Home
        app.get('/', function (req, res) {
            res.render('home')
            console.log("Home page.")
        })

        //Error Page
        app.get('*', function (req, res) {
            res.render('error')
            console.log("Error 404: Page not found.")
        })