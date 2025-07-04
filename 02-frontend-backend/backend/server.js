import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})
app.get('/api', (req, res) => {
    res.send("<h1>welcome to my server </h1>")

})
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "setup": "Why don't programmers like nature?",
            "punchline": "It has too many bugs."
        },
        {
            "id": 2,
            "setup": "Why do JavaScript developers wear glasses?",
            "punchline": "Because they don't C#."
        },
        {
            "id": 3,
            "setup": "How do you comfort a JavaScript bug?",
            "punchline": "You console it."
        },
        {
            "id": 4,
            "setup": "Why did the backend developer go broke?",
            "punchline": "Because he lost his cache."
        },
        {
            "id": 5,
            "setup": "What do you call 8 hobbits?",
            "punchline": "A hobbyte."
        }, {
            "id": 6,
            "setup": "another joke ",
            "punchline": "no punchline !"
        }
    ]

    res.send(jokes)

})
