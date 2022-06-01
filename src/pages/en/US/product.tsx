import { useEffect, useState } from 'react';

import Layout from '../../../components/Layout';
import ProductCardContainer from '../../../components/ProductCardContainer/ProductCardContainer.component';
import ProductCardItem from '../../../components/ProductCardItem/ProductCardItem.component';
import Spinner from '../../../components/Spinner/Spinner.component';

import { getProducts } from 'src/pages/api/getProducts';
import { ProductType } from 'src/state/productType';

export default function Product() {
  const [products, setProducts] = useState<ProductType[] | []>([]);

  useEffect(() => {
    const getTheProducts = getProducts();
    getTheProducts
      .then(data => {
        setProducts(data as ProductType[]);
      })
      .catch(() => {
        setProducts([]);
        window.alert('Oops! Something went wrong');
      });
  }, []);

  const productBox = (
    <ProductCardContainer>
      {products.map(({ id, name, description, image, price }) => (
        <ProductCardItem
          key={id}
          id={id}
          name={name}
          description={description}
          image={image}
          price={price}
        />
      ))}
    </ProductCardContainer>
  );

  return (
    <Layout>
      <>{!products ? <Spinner /> : productBox}</>
    </Layout>
  );
}
