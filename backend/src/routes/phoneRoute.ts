import express from 'express'
import phoneController from '@/src/controllers/phoneController'

export const phoneRouter = express.Router()

phoneRouter.get('/', phoneController.getPhones)
