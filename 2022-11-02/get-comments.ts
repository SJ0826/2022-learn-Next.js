import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, OrderItem } from '@prisma/client'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

const prisma = new PrismaClient()

async function getComments(productId: number) {
  try {
    const orders = await prisma.orderItem.findMany({
      where: {
        productId,
      },
    })
    console.log('Created Id')
    let response = []

    for (const orderItem of OrderItem) {
      const res = await prisma.comments.findMany({
        where: {
          orderItemId: orderItem.id,
        },
      })
      response.push({ ...orderItem, ...res })
    }

    return response
  } catch (error) {
    console.error(error)
  }
}

type Data = {
  items?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { productId } = JSON.parse(req.body)
  if (productId == null) {
    res.status(200).json({ items: [], message: `no Session` })
    return
  }
  try {
    const wishlist = await getComments(String(productId.id), item, orderInfo)
    res.status(200).json({ items: wishlist, message: `Success` })
  } catch (error) {
    return res.status(400).json({ message: `Failed` })
  }
}
