import { Phone } from '../types/entities/phone'
import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { removeHiphen } from '../utils/functions/removeHiphen'

export const prisma = new PrismaClient()

const data: Phone[] = Array.from({ length: 30 }).map(() => {
  return {
    name: faker.person.firstName(),
    lastName: faker.person.firstName(),
    phone: removeHiphen(faker.phone.number()),
  }
})

async function main() {
  data.forEach(async (value) => {
    console.log('value: ', value.phone)
    await prisma.phone.create({
      data: { name: value.name, lastName: value.lastName, phone: value.phone },
    })
  })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
