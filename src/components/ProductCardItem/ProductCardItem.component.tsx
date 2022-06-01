import Image from 'next/image';
import React from 'react';

import {
  CardItem,
  Description,
  Price,
  Title,
  ImageContainer,
} from './ProductCard.styles';

import { ProductType } from 'src/state/productType';

const currency_symbols = {
  USD: '$', // US Dollar
  EUR: '€', // Euro
  CRC: '₡', // Costa Rican Colón
  GBP: '£', // British Pound Sterling
  ILS: '₪', // Israeli New Sheqel
  INR: '₹', // Indian Rupee
  JPY: '¥', // Japanese Yen
  KRW: '₩', // South Korean Won
  NGN: '₦', // Nigerian Naira
  PHP: '₱', // Philippine Peso
  PLN: 'zł', // Polish Zloty
  PYG: '₲', // Paraguayan Guarani
  THB: '฿', // Thai Baht
  UAH: '₴', // Ukrainian Hryvnia
  VND: '₫', // Vietnamese Dong
};

export default function ProductCardItem({
  id,
  name,
  description,
  image,
  price,
}: ProductType) {
  const asArray = Object.entries(currency_symbols);
  const currencySybmol = asArray.filter(([key, value]) => {
    if (key === price.currency) return value;
  })[0][1];

  const buyNowHandler = (_: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Buy Now');

    // TO:DO
  };

  return (
    <CardItem data-testid="product-element">
      <ImageContainer>
        <Image src={image} alt={id} height="140" width="140" />
      </ImageContainer>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Price>
        {currencySybmol}
        {price.amount}
      </Price>
      <button onClick={buyNowHandler} type="button">
        Buy now
      </button>
    </CardItem>
  );
}
