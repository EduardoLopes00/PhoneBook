import { Request, Response } from 'express'
import {
  createNewPhone,
  deletePhone,
  getAllPhones,
  getPhoneById,
  updatePhone,
} from '../services/phoneService'
import { PhoneRequestBody } from '../types/http/DTO'
import { HttpVerbs } from '../types/http/structure'
import { HttpVerbsAndAction } from '../utils/consts/httpVerbs'
import { UUID } from 'crypto'

export function getPhones(req: Request, res: Response) {
  try {
    getAllPhones().then((allPhones) => {
      return res.status(200).json(allPhones)
    })
  } catch (error) {
    defaultCatchTreatment('GET', error as Error, res)
  }
}

export function getPhoneByIdRequest(req: Request, res: Response) {
  try {
    getPhoneById(req.params.id as UUID).then((data) => {
      return res.status(200).json({
        data,
      })
    })
  } catch (error) {
    defaultCatchTreatment('GET', error as Error, res)
  }
}

export function createPhone(req: Request<PhoneRequestBody>, res: Response) {
  try {
    createNewPhone(req.body).then((newPhone) => {
      return res.status(201).json({
        message: 'A new register has been created successfully!',
        data: newPhone,
      })
    })
  } catch (error) {
    defaultCatchTreatment('INSERT', error as Error, res)
  }
}

export function updatePhoneRequest(req: Request, res: Response) {
  try {
    updatePhone(req.body, req.params.id as UUID).then((updatedPhone) => {
      return res.status(201).json({
        message: 'The phone has been updated successfully!',
        data: updatedPhone,
      })
    })
  } catch (error) {
    defaultCatchTreatment('PUT', error as Error, res)
  }
}

export function deletePhoneRequest(req: Request, res: Response) {
  try {
    deletePhone(req.params.id as UUID).then(() => {
      return res.status(200).json({
        message: 'The phone has been deleted successfully!',
      })
    })
  } catch (error) {
    defaultCatchTreatment('DELETE', error as Error, res)
  }
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
