import { PrismaClient } from '@prisma/client/index'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

// Ensure the prisma instance is reused across hot reloads in development
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
