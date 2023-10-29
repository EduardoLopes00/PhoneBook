import { Request, Response } from 'express'
import { PhoneResponseBody } from '@/src/types/http/responses'

function getPhones(req: Request, res: Response<PhoneResponseBody[]>) {
  return res.status(200).json([])
}

export default {
  getPhones,
}
