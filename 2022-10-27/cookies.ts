import { serialize, CookieSerializeOptions } from 'cookie'
import { NextApiResponse } from 'next'

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)

  if (typeof options.maxAge === 'number') {
    options.expires = new Date(Date.now() + options.maxAge * 1000)
  }

  res.setHeader('Set-Cookie', serialize(name, stringValue, options))
}


import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from '../../utils/cookies'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  
  setCookie(res, 'Next.js', 'api-middleware!')

  res.end(res.getHeader('Set-Cookie'))
}

export default handler