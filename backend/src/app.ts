import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { phoneRouter } from './routes/phoneRoute'

export const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use('/phone/', phoneRouter)
