const express   = require('express'),
      sql       = require('mysql'),
      hbs       = require('hbs');



    //Mysql config
        const db = sql.createConnection({
            host: 'localhost',
            port: 3000,// 8889 for mac, 3000 for windows
            user: 'root',
            password: '',// leave blank for windows, "root" for mac
            database: 'db_fav_things' // link db here
        });

        //creating pool
        const pool = sql.createPool({
            connectionLimit : 10,
            host: "localhost",
            user: "root",
            password: "",
            database: "db_fav_things"
        });

        //connecting to db
        db.connect(()=>{ 
            console.log('Mysql connected.')
        });

        const app = express()
              app.listen(3000)
              console.log('Connected to port 3000.')

              app.use(express.static('public'));
              app.set('view engine', 'hbs');

    //Routes
        //Home
        app.get('/', (req,res)=>{
            pool.query('SELECT * FROM tbl_things', function (error, results, fields) {
                if (error) throw error;
                console.log('DB results: ', results);

                res.render('home', {
                    //music
                    cordae:     results[0],
                    gravy:      results[1],
                    trippie:    results[2],

                    //games
                    siege:      results[3],
                    minecraft:  results[4],
                    rocket:     results[5],

                    //activities
                    fest:       results[6],
                    kayak:      results[7],
                    soccer:     results[8]
                })
              });
        



        console.log('Home route');
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
            res.render('error'); 
        })