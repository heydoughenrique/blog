import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const checkoutSession = await stripe.checkout.sessions.create({
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
      payment_method_types: ['card'],
      line_items: [
        { price: 'price_1JRQuxGES2JJaug66q9IimwE', quantity: 1 },
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
    });

  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed')
  }
}