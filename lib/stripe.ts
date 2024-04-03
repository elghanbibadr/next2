import Stripe from "stripe";

let stripeSecretKey;

if (process.env.NODE_ENV === 'production') {
  stripeSecretKey = process.env.STRIPE_SECRET_KEY_PROD;
} else {
  stripeSecretKey = process.env.STRIPE_SECRET_KEY_DEV;
}
export const stripe = new Stripe(stripeSecretKey ?? "", {
  apiVersion: "2023-10-16",
  typescript: true
});


 