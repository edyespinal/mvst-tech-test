import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/utils/prisma'

export default async function coffee(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> {
  try {
    await prisma?.$connect()

    const coffees = await prisma?.coffees.findMany()

    res.status(200).json(coffees)
  } catch (error) {
    console.log(error)

    res.status(500).json({
      error: { message: 'Something went wrong' },
    })
  }
}
