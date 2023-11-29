import { useMemo } from 'react';
import { Container } from '@/components/layout/customer';
import { ProductCard } from '@/components/customer/common';

import { useWindowWidth } from '@/utils';

import PImage1 from '@/assets/customer/products/product1.png';
import PImage2 from '@/assets/customer/products/product2.png';
import PImage3 from '@/assets/customer/products/product3.png';
import PImage4 from '@/assets/customer/products/product4.png';
import PImage5 from '@/assets/customer/products/product5.png';
import PImage6 from '@/assets/customer/products/product6.png';
import PImage7 from '@/assets/customer/products/product7.png';
import styles from './FeaturedItems.module.scss';

export function FeaturedItems() {
  const products = [
    {
      image: PImage1,
      name: 'Mystery Awesome Box',
      place: "Lilly's Jewels",
      price: 20,
    },
    {
      image: PImage2,
      name: 'Mystery Awesome Box',
      place: "John's Farm Stand",
      price: 20,
    },
    {
      image: PImage3,
      name: 'Mystery Awesome Box',
      place: "John's Farm Stand",
      price: 20,
    },
    {
      image: PImage4,
      name: 'Mystery Awesome Box',
      place: "John's Farm Stand",
      price: 20,
    },
    {
      image: PImage5,
      name: 'Mystery Awesome Box',
      place: "John's Farm Stand",
      price: 20,
    },
    {
      image: PImage6,
      name: 'Mystery Awesome Box',
      place: "Lilly's Jewels",
      price: 20,
    },
    {
      image: PImage7,
      name: 'Mystery Awesome Box',
      place: "Lilly's Jewels",
      price: 20,
    },
  ];
  const minBreakLists = ['none', 'xs'];

  const [_, breakpoint] = useWindowWidth();
  const isMobile = useMemo(() => {
    return minBreakLists.includes(breakpoint as string);
  }, [breakpoint]);

  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <h1>Featured Items</h1>
        <div className={styles.featuredItems}>
          {products
            .slice(0, products.length - 1)
            .map((product: any, index: number) => (
              <ProductCard
                key={`${product.name}-${index}`}
                product={product}
                isActive={isMobile}
              />
            ))}
          {!isMobile && (
            <ProductCard isLoadMore={true} product={products.reverse()[0]} />
          )}
        </div>
        {isMobile && (
          <>
            <h1>More To Discover</h1>
            <div className={styles.moreItems}>
              {products
                .slice(0, products.length - 1)
                .map((product: any, index: number) => (
                  <ProductCard
                    key={`${product.name}-${index}`}
                    product={product}
                    isActive={true}
                  />
                ))}
              <ProductCard isLoadMore={true} product={products.reverse()[0]} />
            </div>
          </>
        )}
      </Container>
    </div>
  );
}
