import { prisma } from '../prisma'
import { Phone } from '../types/entities/phone'

export async function getAllPhones() {
  const allPhones = await prisma.phone.findMany().then((phones) => {
    return phones
  })

  return allPhones
}

export async function createNewPhone(phone: Phone) {
  const newPhone = await prisma.phone.create({ data: phone })

  return newPhone
}
