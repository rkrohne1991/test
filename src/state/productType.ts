import { ProductPriceType } from './productPriceType';

export interface ProductType {
  id: string;
  name: string;
  description: string;
  image: string;
  price: ProductPriceType;
};
