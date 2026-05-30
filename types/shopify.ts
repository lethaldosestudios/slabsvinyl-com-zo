export interface ShopifyMetafield {
  key: string;
  value: string;
  type: string;
}

export interface ShopifyImage {
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

export interface ShopifyPriceRange {
  minVariantPrice: {
    amount: string;
    currencyCode: string;
  };
}

export interface ShopifyProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  quantityAvailable: number;
  price: {
    amount: string;
    currencyCode: string;
  };
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  vendor: string;
  availableForSale: boolean;
  priceRange: ShopifyPriceRange;
  featuredImage: ShopifyImage;
  images: {
    edges: {
      node: ShopifyImage;
    }[];
  };
  variants: {
    edges: {
      node: ShopifyProductVariant;
    }[];
  };
  metafields: (ShopifyMetafield | null)[];
}

export interface ShopifyCollection {
  id: string;
  title: string;
  handle: string;
  description: string;
  image: ShopifyImage | null;
  products: {
    edges: {
      node: ShopifyProduct;
    }[];
  };
}

export interface ShopifyCartLine {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    image: ShopifyImage;
    priceV2: {
      amount: string;
      currencyCode: string;
    };
    product: {
      title: string;
      handle: string;
      vendor: string;
    };
  };
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  lines: {
    edges: {
      node: ShopifyCartLine;
    }[];
  };
  cost: {
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
  };
}