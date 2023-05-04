// error messages are because the functions are "backend" and will work when you use Netlify's serverless functions. Can be ignored.

// require('dotenv').config()
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// exports.handler = async (event, ctx) => {
//   const products = await stripe.products.list()
//   return {
//     statusCode: 200,
//     body: JSON.stringify(products.data)
//   }
// }

require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.handler = async (event, ctx) => {
  const products = await stripe.products.list()
  const productsWithPrices = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id })
      return { ...product, prices: prices.data }
    })
  )
  return {
    statusCode: 200,
    body: JSON.stringify(productsWithPrices)
  }
}
