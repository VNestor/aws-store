# AWS Bookstore

Online bookstore built with AWS, React, and Stripe.

## Dependencies

- React 17.0.2
- aws-amplify 4.3.30
- @aws-amplify/ui-react 1.2.5
- react-router-dom 6.3.0
- stripe 10.0.0
- @stripe/react-stripe-js 1.10.0
- @stripe/stripe-js 1.34.0
- uuid 8.3.2
- react-icons 4.4.0
- styled-components 5.3.5

## Description

Built an online bookstore with a React front-end, AWS Amplify back-end, and Sripe's API to process payments.

### Architecture Diagram

<img src="https://user-images.githubusercontent.com/37969271/182922328-02c1cc45-5bf1-43f1-a5c7-d86cac7a447c.png" width="700">

- React connects to Amplify Library.
- Amplify Library 
  - GraphQL API powered by AWS AppSync
    - Handles CRUD operations for maintaining books.
    - Is handled by VTL templates.
    - Amplify also provides queries, mutations, and front-end resources to connect to the backend.
  - Amazon Cognito 
    - Used for multi-auth functionality. 
    - Amazon Cognito is used alongside IAM to allow guest users to connect to the back-end and view books.
  - Pipeline Resolver
    - Handles the payment and checkout process.
    - First lambda function gets trigerred after a user checks out.
    - Before a customer is charged, it will acquire user details from Cognito.
    - After the payment is made and customer is charged using Stripe, the next lambda function takes over and creates the order in DynamoDB.
- Hosting
  - S3 Bucket used to host the static site.
  - S3 Bucket used to host images.
  
  
# Installing

```
git clone https://github.com/VNestor/aws-store.git
npm i
npm start
```
  

## Authors

[Victor Nestor](https://github.com/VNestor)

## Acknowledgments

- [freecodecamp](https://www.freecodecamp.org/news/how-to-make-a-store-in-one-day-aws-react-stripe/)
- [Manoj Fernando](https://github.com/mjzone)
    
