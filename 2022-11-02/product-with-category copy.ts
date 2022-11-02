import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getRandom = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const sneakers = [
  {
    name: `Sneakers 1`,
    contents: `{"blocks":[{"key":"uruq","text":"오래된 듯한 모습과 클래식한 컬러를 통해 좋아하는 농구화가 빈티지한 스타일로 재탄생합니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://static.nike.com/a/images/t_prod_ss/w_960,c…-slate-dq7679-400-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg`,
    price: getRandom(30000, 100000),
  },
  {
    name: `Sneakers 2`,
    contents: `{"blocks":[{"key":"uruq","text":"오래된 듯한 모습과 클래식한 컬러를 통해 좋아하는 농구화가 빈티지한 스타일로 재탄생합니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://static.nike.com/a/images/t_prod_ss/w_960,c…y-navy-dr9705-300-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg`,
    price: getRandom(30000, 100000),
  },

  {
    name: `Sneakers 3`,
    contents: `{"blocks":[{"key":"uruq","text":"오래된 듯한 모습과 클래식한 컬러를 통해 좋아하는 농구화가 빈티지한 스타일로 재탄생합니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://static.nike.com/a/images/t_prod_ss/w_960,c…-green-dv1143-300-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg`,
    price: getRandom(30000, 100000),
  },

  {
    name: `Sneakers 4`,
    contents: `{"blocks":[{"key":"uruq","text":"오래된 듯한 모습과 클래식한 컬러를 통해 좋아하는 농구화가 빈티지한 스타일로 재탄생합니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://static.nike.com/a/images/t_prod_ss/w_960,c…l-blue-dq8799-101-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg`,
    price: getRandom(30000, 100000),
  },

  {
    name: `Sneakers 5`,
    contents: `{"blocks":[{"key":"uruq","text":"오래된 듯한 모습과 클래식한 컬러를 통해 좋아하는 농구화가 빈티지한 스타일로 재탄생합니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://static.nike.com/a/images/t_prod_ss/w_960,c…h-blue-dr6952-400-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg`,
    price: getRandom(30000, 100000),
  },

  {
    name: `Sneakers 6`,
    contents: `{"blocks":[{"key":"uruq","text":"오래된 듯한 모습과 클래식한 컬러를 통해 좋아하는 농구화가 빈티지한 스타일로 재탄생합니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://static.nike.com/a/images/t_prod_ss/w_960,c…atinum-dx4291-001-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg`,
    price: getRandom(30000, 100000),
  },

  {
    name: `Sneakers 7`,
    contents: `{"blocks":[{"key":"uruq","text":"오래된 듯한 모습과 클래식한 컬러를 통해 좋아하는 농구화가 빈티지한 스타일로 재탄생합니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://static.nike.com/a/images/t_prod_ss/w_960,c…-shima-dv6998-200-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg`,
    price: getRandom(30000, 100000),
  },

  {
    name: `Sneakers 8`,
    contents: `{"blocks":[{"key":"uruq","text":"오래된 듯한 모습과 클래식한 컬러를 통해 좋아하는 농구화가 빈티지한 스타일로 재탄생합니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://static.nike.com/a/images/t_prod_ss/w_960,c…-shima-dv6998-200-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg`,
    price: getRandom(30000, 100000),
  },

  {
    name: `Sneakers 9`,
    contents: `{"blocks":[{"key":"uruq","text":"오래된 듯한 모습과 클래식한 컬러를 통해 좋아하는 농구화가 빈티지한 스타일로 재탄생합니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://static.nike.com/a/images/t_prod_ss/w_960,c…-black-dd1399-700-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg`,
    price: getRandom(30000, 100000),
  },

  {
    name: `Sneakers 10`,
    contents: `{"blocks":[{"key":"uruq","text":"오래된 듯한 모습과 클래식한 컬러를 통해 좋아하는 농구화가 빈티지한 스타일로 재탄생합니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url: `https://static.nike.com/a/images/t_prod_ss/w_960,c…orange-dd1391-300-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg`,
    price: getRandom(30000, 100000),
  },
]

const tShirt = [
  {
    name: `tShirt 1`,
    contents: `{"blocks":[{"key":"uruq","text":"오래된 듯한 모습과 클래식한 컬러를 통해 좋아하는 농구화가 빈티지한 스타일로 재탄생합니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url: `https://static.nike.com/a/images/t_prod_ss/w_960,c…-slate-dq7679-400-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg`,
    price: getRandom(30000, 100000),
  },
]
const pants = [
  {
    name: `pants 1`,
    contents: `{"blocks":[{"key":"uruq","text":"오래된 듯한 모습과 클래식한 컬러를 통해 좋아하는 농구화가 빈티지한 스타일로 재탄생합니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url: `https://static.nike.com/a/images/t_prod_ss/w_960,c…-slate-dq7679-400-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg`,
    price: getRandom(30000, 100000),
  },
]
const cap = [
  {
    name: `cap 1`,
    contents: `{"blocks":[{"key":"uruq","text":"오래된 듯한 모습과 클래식한 컬러를 통해 좋아하는 농구화가 빈티지한 스타일로 재탄생합니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url: `https://static.nike.com/a/images/t_prod_ss/w_960,c…-slate-dq7679-400-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg`,
    price: getRandom(30000, 100000),
  },
]
const hoodie = [
  {
    name: `hoodie 5`,
    contents: `{"blocks":[{"key":"uruq","text":"오래된 듯한 모습과 클래식한 컬러를 통해 좋아하는 농구화가 빈티지한 스타일로 재탄생합니다.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url: `https://static.nike.com/a/images/t_prod_ss/w_960,c…-slate-dq7679-400-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg`,
    price: getRandom(30000, 100000),
  },
]

const productData: Prisma.productsCreateInput[] = [
  ...sneakers,
  ...tShirt,
  ...pants,
  ...cap,
  ...hoodie,
]

async function main() {
  const CATEGORIES = ['SNEAKERS', 'T-SHIRT', 'PANTS', 'CAP', 'HOODIE']
  CATEGORIES.forEach(async (c, i) => {
    const product = await prisma.categories.upsert({
      where: {
        id: i + 1,
      },
      update: {
        name: c,
      },
      create: {
        name: c,
      },
    })
    console.log(`Upsert category id : ${product.id}`)
  })

  await prisma.products.deleteMany({})

  for (const p of productData) {
    const product = await prisma.products.create({
      data: p,
    })
    console.log(`Created id: ${product.id}`)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })
