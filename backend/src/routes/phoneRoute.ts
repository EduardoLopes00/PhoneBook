import express from 'express'
import {
  createPhone,
  deletePhone,
  getPhones,
  updatePhone,
} from '../controllers/phoneController'

export const phoneRouter = express.Router()

phoneRouter.get('/', getPhones)
phoneRouter.post('/', createPhone)
phoneRouter.put('/', updatePhone)
phoneRouter.delete('/:id', deletePhone)
