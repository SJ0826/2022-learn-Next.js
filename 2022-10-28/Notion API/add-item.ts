import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: 'secret_Newb8txYsi2Aq7TqOY58ERSfmlJbEDbnm8Fp13Ugydd',
})

const databaseId = 'afb66e4686414eedbdb6e5b448ef43b2'

async function addItem(name: string) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
    })
    console.log(response)
  } catch (error) {
    console.error(JSON.stringify(error))
  }
}

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.query

  if (name == null) {
    return res.status(400).json({ message: 'No name' })
  }
  try {
    await addItem(String(name))
    return res.status(200).json({ message: `Success ${name} added` })
  } catch (error) {
    return res.status(400).json({ message: `Failed ${name} added` })
  }
}
