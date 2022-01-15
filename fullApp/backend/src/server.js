const  express =require( 'express')
const  emoji =require( 'node-emoji')
const  cors =require( 'cors')
const  morgan =require( 'morgan')
const dotenv = require('dotenv')
const RouterProductos = require('./router/productos.route.js')

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))

const routerProductos = new RouterProductos()

app.use('/productos', routerProductos.start())

const PORT = process.env.PORT || 4000
const server = app.listen(PORT, () => console.log(emoji.get('fire'),`Server started on port http://localhost:${PORT}`))
server.on('error', (err) => console.log(err))