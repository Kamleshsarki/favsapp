const db = require('../db/connection.js')

module.exports = app=>{
//GET all songs
app.get('/songs',(req, res)=>{
    db.query('SELECT*FROM songs',(e,songs)=>{
        if(e){
            console.log(e)
        }
        res.json(songs)
    })
   
})

//POST a song
app.post('/songs', (req, res)=>{
    db.query(`INSERT INTO songs(title, artist) VALUES("${req.body.title}",
    "${req.body.artist}")`, e =>{
        if(e){
            console.log(e)
        }
        res.sendStatus(200)
    })
})

//DELETE a song
app.delete('/songs/:title',(req, res)=>{
    db.query(`DELETE FROM songs WHERE title = "${req.params.title}"`, e => {
        if(e){
            console.log(e)
        }
        res.sendStatus(200)
    })
})
}
