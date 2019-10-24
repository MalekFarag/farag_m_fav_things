const express   = require('express'),
      mysql     = require('mysql'),
      hbs       = require('hbs'),
      sql       = require('../utils/sql'),
      router    = express.Router();

    const app = express()
    app.listen(3000)
    console.log('Connected to port 3000.')

    app.use(express.static('public'));
    app.set('view engine', 'hbs');

    //Routes
        //Home
        router.get('/', (req,res)=>{
            console.log('Home route.')
            res.render('home')

            //let query = `SELECT * FROM tbl_card WHERE profID="${req.params.id}"`;
            sql.query(query, (err, result) => {
                if (err) { throw err; console.log(err);
                }})
        })

        //Dynamic
        router.get('/thing:id', (req,res)=>{
            console.log('Dynamic route.')
            console.log(req.params.id)

            //let query = `SELECT * FROM tbl_card WHERE profID="${req.params.id}"`;
            sql.query(query, (err, result) => {
                if (err) { throw err; console.log(err);
                }})
        })

        //Error
        router.get('*', (req,res)=>{
            console.log('error 404: page not found')
            res.render('error')
        })