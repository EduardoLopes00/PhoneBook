import express from 'express'
import {
  createPhone,
  deletePhoneRequest,
  getPhoneByIdRequest,
  getPhones,
  updatePhoneRequest,
} from '../controllers/phoneController'

export const phoneRouter = express.Router()

phoneRouter.get('/', getPhones)
phoneRouter.get('/:id', getPhoneByIdRequest)
phoneRouter.post('/', createPhone)
phoneRouter.put('/:id', updatePhoneRequest)
phoneRouter.delete('/:id', deletePhoneRequest)
