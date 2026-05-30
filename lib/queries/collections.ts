/**
 * lib/queries/collections.ts
 * GraphQL query strings for collection operations.
 */

export const GetCollections = `
  query GetCollections {
    collections(first: 6) {
      edges {
        node {
          id
          title
          handle
          description
          image {
            url
            altText
            width
            height
          }
          products(first: 4) {
            edges {
              node {
                id
                title
                handle
                featuredImage {
                  url
                  altText
                }
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GetCollectionByHandle = `
  query GetCollectionByHandle($handle: String!) {
    collectionByHandle(handle: $handle) {
      id
      title
      handle
      description
      image {
        url
        altText
        width
        height
      }
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
  }
`;