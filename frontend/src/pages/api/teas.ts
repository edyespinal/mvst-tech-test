import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/utils/prisma'
import { ERROR_405, ERROR_MESSAGE } from '@/utils/constants'

export default async function getAllTeas(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { method } = req

  if (method !== 'GET') {
    res.status(405).json({ error: { message: ERROR_405 } })

    return
  }

  try {
    await prisma.$connect()

    const teas = await prisma.teas.findMany()

    res.status(200).json(teas)
  } catch (error) {
    res.status(500).json({
      error: { message: ERROR_MESSAGE },
    })
  }
}
