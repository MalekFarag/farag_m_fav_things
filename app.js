const express   = require('express'),
      sql       = require('mysql'),
      hbs       = require('hbs');



    //Mysql config
        const db = sql.createConnection({
            host: 'localhost',
            port: 8889,// 8889 for mac, 3000 for windows
            user: 'root',
            password: 'root',// leave blank for windows, "root" for mac
            database: 'db_fav_things' // link db here
        });

        //connecting to db
        db.connect(()=>{ 
            console.log('Mysql connected.');
        });

        const app = express()
              app.listen(3000);
              console.log('Connected to port 3000.');

              app.use(express.static('public'));
              app.set('view engine', 'hbs');

    
        // maybe add this?
        //app.use('/', require('routes/index.js'));

    //Routes
        //Home
        app.get('/', (req,res)=>{
            db.query('SELECT * FROM tbl_things', function (error, results, fields) {
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
            })
        //Dynamic
        // app.get('/things/:name', (req,res)=>{
        //     console.log(`Dynamic route: ${req.params.name}.`)

        //     let url = `/users/${this.className.split(' ')[1]}`;

        //     let query = `SELECT * FROM tbl_card WHERE name="${req.params.name}"`;
        //     db.query(query, (err, result) => {
        //         if (err) { throw err; console.log(err);
        //             console.log(result);
        //         }})
        // })
        // I gave up on this... sorry

        //Error
        app.get('/*', (req,res)=>{
            let err = new Error('404 page not found.');

            res.render('error', { data: err}); // , layout: 'errorPage'
        })