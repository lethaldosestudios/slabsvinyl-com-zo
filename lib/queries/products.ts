/**
 * lib/queries/products.ts
 * GraphQL query strings for product operations.
 * Metafields use namespace "slabs" per project conventions.
 */

export const GetProducts = `
  query GetProducts {
    products(first: 12) {
      edges {
        node {
          id
          title
          handle
          vendor
          availableForSale
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          featuredImage {
            url
            altText
            width
            height
          }
          variants(first: 1) {
            edges {
              node {
                id
                availableForSale
                quantityAvailable
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
          metafields(identifiers: [
            { namespace: "slabs", key: "catalog_index" }
            { namespace: "slabs", key: "genre" }
            { namespace: "slabs", key: "catalog_number" }
          ]) {
            key
            value
            type
          }
        }
      }
    }
  }
`;

export const GetProductByHandle = `
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      vendor
      availableForSale
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      featuredImage {
        url
        altText
        width
        height
      }
      images(first: 6) {
        edges {
          node {
            url
            altText
            width
            height
          }
        }
      }
      variants {
        edges {
          node {
            id
            availableForSale
            quantityAvailable
            price {
              amount
              currencyCode
            }
          }
        }
      }
      metafields(identifiers: [
        { namespace: "slabs", key: "catalog_index" }
        { namespace: "slabs", key: "genre" }
        { namespace: "slabs", key: "catalog_number" }
        { namespace: "slabs", key: "pressing_notes" }
        { namespace: "slabs", key: "sonic_lineage" }
      ]) {
        key
        value
        type
      }
    }
  }
`;