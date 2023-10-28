import { app } from "./app";

app.get('/get', (req, res) => {
    return res.json('OLÁ MUNDO!')
})

app.listen({ port: 3333 }, () => { console.log('Server is running!') })