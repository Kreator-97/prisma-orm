import { db } from '@/database'

export const getUsers = async () => {
  const users = await db.user.findMany()

  return users
}

export const createUser = async (name: string, email: string) => {
  return await db.user.create({
    data: {
      email, name,
    }
  })
}