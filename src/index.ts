import express, {Request, Response} from "express"
const app = express()
const port = 3000

app.get('/', (req:Request, res: Response) => {
    res.send('<h1>Bienvenue sur ma page Express avec TypeScript !</h1>');
} )

app.listen(port, ()=>{
    console.log(`Serveur lancé sur http://localhost:${port}`)
})