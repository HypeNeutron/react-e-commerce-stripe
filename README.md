# React Comfy Example E-Commerce

## Tool to Development

- Netlify Serverless Functions Stripe
- Stripe payment third party
- Using API Cross Origin Form: course-api
- React bundle context and reducer

### Netlify Deploy Build [ Show Advanced ] New Available All in .env

### .env vars

- REACT_APP_AUTH_DOMAIN=
- REACT_APP_CLIENT_ID=
- REACT_APP_STRIPE_PUBLIC_KEY=
- REACT_APP_STRIPE_SECRET_KEY=

#### Extra Setup

```Terminal
npm i dotenv stripe @stripe/react-stripe-js @stripe/stripe-js netlify
```

```Terminal
npm i netlify-cli -D
```

#### Strip CSP in fixing in index.html meta Tag in setting up

```html
  <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; 
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://js.stripe.com;
  frame-src 'self' https://js.stripe.com https://hooks.stripe.com">

```
