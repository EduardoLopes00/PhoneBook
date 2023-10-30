import { UUID } from 'crypto'
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

export async function updatePhone(phone: Phone, id: UUID) {
  const updatedPhone = await prisma.phone.update({
    where: {
      id,
    },
    data: {
      name: phone.name,
      lastName: phone.lastName,
      phoneNumber: phone.phoneNumber,
    },
  })

  return updatedPhone
}

export async function deletePhone(id: UUID) {
  return await prisma.phone.delete({
    where: {
      id,
    },
  })
}

export async function getPhoneById(id: UUID) {
  return await prisma.phone.findUnique({
    where: {
      id,
    },
  })
}
