// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createUser, getUsers } from "@/server/services/user";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

  await createUser('John Doe', 'correo2@corre.com')
  const users = await getUsers()

  console.log({ users })
  res.status(200).json({ name: "John Doe" });
}
