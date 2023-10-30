import { Request, Response } from 'express'
import { createNewPhone, getAllPhones } from '../services/phoneService'
import { PhoneRequestBody } from '../types/http/requests'
import { HttpVerbs } from '../types/http/structure'
import { HttpVerbsAndAction } from '../utils/consts/httpVerbs'

export function getPhones(req: Request, res: Response) {
  getAllPhones()
    .then((allPhones) => {
      return res.status(200).json(allPhones)
    })
    .catch((error: Error) => defaultCatchTreatment('GET', error, res))
}

export function createPhone(req: Request<PhoneRequestBody>, res: Response) {
  createNewPhone(req.body)
    .then((newPhone) => {
      return res.status(201).json({
        message: 'A new register has been created successfully!',
        data: newPhone,
      })
    })
    .catch((error: Error) => defaultCatchTreatment('INSERT', error, res))
}

export function updatePhone(req: Request, res: Response) {
  // const allPhones = getAllPhones()

  return res.status(200).json({ message: 'ola' })
}

export function deletePhone(req: Request, res: Response) {
  // const allPhones = getAllPhones()

  return res.status(200).json({ message: 'ola' })
}

function defaultCatchTreatment(
  httpVerb: HttpVerbs,
  error: Error,
  res: Response
) {
  const verb = HttpVerbsAndAction[httpVerb]
  const message = `An error ocurred while trying to ${verb} the data: ${error.message}`

  res.status(500).json({ message })
}
