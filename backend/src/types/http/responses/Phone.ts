import { UUID } from 'crypto'

export interface PhoneResponseBody {
  id: UUID
  name: string
  lastName: string
  phone: number
}
