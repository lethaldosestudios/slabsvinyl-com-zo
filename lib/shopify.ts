/**
 * lib/shopify.ts
 * Single GraphQL fetch utility for all Storefront API queries.
 * Reads env vars: SHOPIFY_STOREFRONT_API_URL, SHOPIFY_STOREFRONT_ACCESS_TOKEN
 */

export async function storefront<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const url = process.env.SHOPIFY_STOREFRONT_API_URL;
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!url) {
    throw new Error("SHOPIFY_STOREFRONT_API_URL environment variable is not set");
  }

  if (!token) {
    throw new Error(
      "SHOPIFY_STOREFRONT_ACCESS_TOKEN environment variable is not set"
    );
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Storefront API request failed with status ${response.status}`
    );
  }

  const json = await response.json();

  if (json.errors) {
    const errorMessages = json.errors
      .map((err: { message: string }) => err.message)
      .join(", ");
    throw new Error(`Storefront API error: ${errorMessages}`);
  }

  return json.data as T;
}