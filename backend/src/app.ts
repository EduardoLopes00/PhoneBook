import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { phoneRouter } from './routes/phoneRoute'
import bodyParser from 'body-parser'

export const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('tiny'))
app.use('/phone/', phoneRouter)
