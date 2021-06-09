const db = require('../db/connection.js')

module.exports = app=>{
//GET all songs
app.get('/movies',(req, res)=>{
    db.query('SELECT*FROM movies',(e,movies)=>{
        if(e){
            console.log(e)
        }
        res.json(movies)
    })
   
})

//POST a song
app.post('/movies', (req, res)=>{
    db.query(`INSERT INTO movies(title, artist) VALUES("${req.body.title}",
    "${req.body.artist}")`, e =>{
        if(e){
            console.log(e)
        }
        res.sendStatus(200)
    })
})

//DELETE a song
app.delete('/movies/:title',(req, res)=>{
    db.query(`DELETE FROM movies WHERE title = "${req.params.title}"`, e => {
        if(e){
            console.log(e)
        }
        res.sendStatus(200)
    })
})
}
