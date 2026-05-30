/**
 * lib/queries/cart.ts
 * GraphQL mutation strings for cart operations.
 */

const CART_FIELDS = `
  id
  checkoutUrl
  totalQuantity
  lines(first: 10) {
    edges {
      node {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            title
            image {
              url
              altText
            }
            priceV2 {
              amount
              currencyCode
            }
            product {
              title
              handle
              vendor
            }
          }
        }
      }
    }
  }
  cost {
    totalAmount {
      amount
      currencyCode
    }
  }
`;

export const CartCreate = `
  mutation CartCreate {
    cartCreate {
      cart {
        ${CART_FIELDS}
      }
    }
  }
`;

export const CartLinesAdd = `
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ${CART_FIELDS}
      }
    }
  }
`;

export const CartLinesUpdate = `
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ${CART_FIELDS}
      }
    }
  }
`;

export const CartLinesRemove = `
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ${CART_FIELDS}
      }
    }
  }
`;