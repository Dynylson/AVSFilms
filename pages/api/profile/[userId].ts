// import { prisma } from "@/lib/prisma"
import { prisma } from "../../../src/lib/prisma"
// import { getMostFrequentString } from "@/utils/getMostFrequentString"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if(req.method !== "GET") return res.status(405).end()

  const userId = String(req.query.userId)

	const profile = await prisma.user.findUnique({
    where: {
      id: userId
    },
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true
                }
              }
            }
          }
        },
        orderBy: {
          created_at: "desc"
        }
      }
    }
  })

  const profileData = {
    user: {
      avatar_url: profile?.avatar_url,
      name: profile?.name,
      member_since: profile?.created_at,
    },
    ratings: profile?.ratings
  }

	return res.json({ profile: profileData })
}