import { prisma } from "../../../../src/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import { buildNextAuthOptions } from "../../auth/[...nextauth]"
import { getServerSession } from "next-auth"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    if(req.method !== "POST") return res.status(405).end()
  
    const session: any = await getServerSession(
      req,
      res,
      buildNextAuthOptions(req, res),
    )
  
    if (!session) return res.status(401).end()
  
    try {
      // const bookId = String(req.query.id)
      const bookId = String(req.query.id)
      const userId = String(session?.user?.id!)

    //   const bodySchema = z.object({
    //     description: z.string().max(450),
    //     rate: z.number().min(1).max(5)
    //   })
  
      const { description, rate } = req.body
  
      // const userAlreadyRated = await prisma.rating.findFirst({
      //   where: {
      //     user_id: userId,
      //     book_id: bookId
      //   }
      // })
  
      // if (userAlreadyRated) {
      //   return res.status(400).json({
      //     error: "Você já avaliou esse filme"
      //   })
      // }
    
      await prisma.rating.create({
        data: {
          book_id: bookId,
          description,
          rate,
          user_id: userId
        }
      })
    
      return res.status(201).end()
    } catch (error) {
      console.error(error)
      return res.status(400).end()
    }
  }