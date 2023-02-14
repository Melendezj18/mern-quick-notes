const Note = require('../../models/note')

async function create(req, res) {
    try {
        const note = req.body.note
        note.owner = req.user._id
        await Note.create(req.body.note)
        .then((note) => {
            res.status(201).json({note:note})
        })
    } catch (error) {
        res.status(400).json(error)
    }
}
    
async function read (req, res) {
    try {
       Note.find()
       .then((notes) => {
        return notes.map((note) => note)
       })
       .then((notes) => {res.status(200).json({notes:notes})})
    } catch {
        res.status(400).json('bad cred')
    }
}
    
module.exports = {
    create,
    read
}