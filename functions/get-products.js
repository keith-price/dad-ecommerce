// error messages are because the functions are "backend" and will work when you use Netlify's serverless functions. Can be ignored.

require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.handler = async (event, ctx) => {
  const products = await stripe.products.list()
  console.log(products)
  return {
    statusCode: 200,
    body: JSON.stringify(products.data)
  }
}
