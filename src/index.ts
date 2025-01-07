import express, {Request, Response} from "express"
const app = express()
const port = 3000

app.set('view engine','ejs')
app.set('views','./views')


// app.get('/', (req:Request, res: Response) => {
    //     res.send('<h1>Bienvenue sur ma page Express avec TypeScript !</h1>');
    // } )
    

app.get('/', (req:Request, res: Response) => {
    const message = 'Bienvenue sur ma page Express avec EJS et TypeScript!';

    res.render('index', {message})
})


app.listen(port, ()=>{
    console.log(`Serveur lancé sur http://localhost:${port}`)
})