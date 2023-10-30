import { Phone } from '../types/entities/phone'
import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { removeHiphen } from '../utils/functions/removeHiphen'

export const prisma = new PrismaClient()

const mockPhones: Phone[] = Array.from({ length: 30 }).map(() => {
  return {
    name: faker.person.firstName(),
    lastName: faker.person.firstName(),
    phoneNumber: removeHiphen(faker.phone.number()),
  }
})

export async function main() {
  mockPhones.forEach(async (mockPhone) => {
    const { name, lastName, phoneNumber } = mockPhone

    await prisma.phone.create({
      data: { name, lastName, phoneNumber },
    })
  })
}
