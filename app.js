const express   = require('express'),
      sql       = require('mysql'),
      hbs       = require('hbs');
      //router    = express.Router();



    //Mysql config
        const db = sql.createConnection({
            host: 'localhost',
            port: 3000,// 8889 for mac, 3000 for windows
            user: 'root',
            password: '',// leave blank for windows, "root" for mac
            database: 'db_fav_things' // link db here
        });

        //connecting to db
        db.connect(()=>{ 
            console.log('Mysql connected.')
        });

        //creating pool
        const pool = sql.createPool({
            connectionLimit : 10,
            host: "localhost",
            user: "root",
            password: "",
            database: "db_fav_things"
        });

        const app = express()
              app.listen(3000)
              console.log('Connected to port 3000.')

              app.use(express.static('public'));
              app.set('view engine', 'hbs');




    //Routes
        //Home
        app.get('/', (req,res)=>{
            console.log('Home route.');
            
        // let query = [`SELECT name, genre, songs FROM tbl_things WHERE thing='music'`];
        // pool.query(query[0], (err, result) => {
        //     if (err) {throw err; console.log(err);}
        //     res.render('home', {result: result})
        // })

        res.render('home');
            
        })

        //Dynamic
        // app.get('/:thing', (req,res)=>{
            //console.log(`Dynamic route: ${req.params.thing}.`)

            //let query = `SELECT * FROM tbl_card WHERE profID="${req.params.id}"`;
            // sql.query(query, (err, result) => {
            //     if (err) { throw err; console.log(err);
            //     }})
        // })

        //Error
        app.get('/*', (req,res)=>{
            console.log('error 404: page not found');
            res.render('error');
        })


        //selecting artists as test
            //able to put query into array for convenience
        // let query = [`SELECT name, genre, songs FROM tbl_things WHERE thing='music'`];
        // pool.query(query[0], (err, result) => {
        //     if (err) {throw err; console.log(err);}
        //     console.log(result);
        // })