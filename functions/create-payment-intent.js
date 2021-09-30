const dotenv = require('dotenv');
dotenv.config();
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);
exports.handler = async (event, context) => {
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
