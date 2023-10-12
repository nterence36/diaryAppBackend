require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

const app = express()
const Entry = require('./models/Diary')

app.use(express.json())
app.use(cors())

app.get('/diary', async(req, res) => {
    const entry = await Entry.find()
    res.json(entry)
})

app.post('/diary/new', async (req, res) => {
    const entry = await Entry({
        title: req.body.title,
        date: req.body.date,
        note: req.body.note
    })
    entry.save()
    res.json(entry)
})

app.delete('/diary/:id', async (req, res) => {
    const entry = await Entry.findByIdAndDelete(req.params.id)
    res.json(entry)
})

app.get('/diary/:id/edit', async (req, res) => {
    const foundEntry = await Entry.findById(req.params.id)
    res.json(foundEntry)
})
app.listen(3001, () => {
    console.log('listening')
})

