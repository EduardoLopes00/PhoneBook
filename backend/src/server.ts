import { app } from "./app";

app.get('/get', (req, res) => {
    return res.json('Hello world!')
})

app.listen({ port: 3333 }, () => { console.log('Server is running!') })