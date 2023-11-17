import { prisma } from "../../../../src/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import { buildNextAuthOptions } from "../../auth/[...nextauth]"
import { getServerSession } from "next-auth"
import { UsuarioNaoLogadoException } from "../../../../src/exceptions/UsuarioNaoLogadoException"

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
  
    if (!session) {
      throw new UsuarioNaoLogadoException("Usuário não está logado!")
      // return res.status(401).end()
    }
    
    try {
      const userId = String(session?.user?.id!)
  
      const { description, rate, book_id } = req.body
  
      const userAlreadyRated = await prisma.rating.findFirst({
        where: {
          user_id: userId,
          book_id: book_id
        }
      })
  
      if (userAlreadyRated) {
        return res.status(400).json({
          error: "Você já avaliou esse filme"
        })
      }
    
      await prisma.rating.create({
        data: {
          book_id,
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