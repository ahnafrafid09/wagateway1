import Express from "express";
import "dotenv/config"

const app = Express()
const port = process.env.PORT

app.get('/', (req,res) => {
    res.send("hello world")
})


app.listen(port, () => {
    console.log(`server run on localhost:${port}`);
})