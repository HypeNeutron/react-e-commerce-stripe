require('dotenv').config(); // for config with stripe payment
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);
// you also can do this!
// const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD } = process.env

exports.handler = async (event, context, cb) => {
  const method = event.httpMethod;
  if (method !== 'POST') {
    return {
      statusCode: 405,
      body: 'Only Accepts POST Requests',
    };
  }

  const { cart, shippingFee, totalAmt } = JSON.parse(event.body);

  const calculateOrderAmount = () => {
    return shippingFee + totalAmt;
  };

  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: 'usd',
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};
