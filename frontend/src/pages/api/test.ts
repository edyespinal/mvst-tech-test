import { NextApiRequest, NextApiResponse } from 'next'

export default function test(req: NextApiRequest, res: NextApiResponse): void {
  res.status(200).json([
    {
      title: 'GEPA Chiapas with two lines',
      description: 'Distributed from the nice countryside of São Paulo',
      imageUrl: '/static/img/placeholder.png',
      type: 'arabic',
    },
  ])
}
