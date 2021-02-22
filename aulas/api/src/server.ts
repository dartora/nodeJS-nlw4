import express, { response } from 'express';

const app = express();

app.get("/", (resquest, response) => {
    return response.send("Hello Rodolfo")
})

app.post("/", (request, response) => {
    return response.json({ message: "Os dados foram salvos com sucesso!" })
})

app.listen(3333, () => console.log("server is runing"));