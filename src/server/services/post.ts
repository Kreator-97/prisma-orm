import { db } from '@/database'

interface GetPostParams {
  authorID: string
}

export const getPosts = async ({ authorID }: GetPostParams) => {

  const posts = await db.post.findMany({
    where: {
      created_at: {
        lt: new Date(),
      },
      author_id: {
        equals: authorID,
      }
    },
    include: {
      author: true
    }
  })

  return posts
}

// db.post.findUnique({
//   where: {

//   }
// })

export const createPost = async (title: string, body: string, author_id: string) => {
  return await db.post.create({
    data: {
      title,
      body,
      author_id,
    }
  })
}
