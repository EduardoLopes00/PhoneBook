import { UUID } from 'crypto'

export interface Phone {
  id?: UUID
  createdAt?: Date
  name: string
  lastName: string
  phoneNumber: string
}
