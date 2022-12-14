import { NextApiRequest, NextApiResponse } from 'next'
import { ERROR_405, ERROR_MESSAGE } from '@/utils/constants'
import { prisma } from '@/utils/prisma'

export default async function getAllCoffees(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { method } = req

  if (method !== 'GET') {
    res.status(405).json({ error: { message: ERROR_405 } })

    return
  }

  try {
    await prisma?.$connect()

    const coffees = await prisma?.coffees.findMany()

    res.status(200).json(coffees)
  } catch (error) {
    res.status(500).json({
      error: { message: ERROR_MESSAGE },
    })
  }
}
