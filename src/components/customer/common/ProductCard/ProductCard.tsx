import clsx from 'clsx';
import { FaChevronRight } from 'react-icons/fa6';

import styles from './ProductCard.module.scss';

interface IProduct {
  image: string;
  name: string;
  place: string;
  price: number;
}

export interface IProductCardProps {
  product: IProduct;
  isLoadMore?: boolean;
  isActive?: boolean;
  className?: string;
}

export function ProductCard({
  isLoadMore = false,
  isActive = false,
  product,
}: IProductCardProps) {
  const { image, name, place, price } = product;

  return (
    <div
      className={clsx(styles.root, isActive || isLoadMore ? styles.active : '')}
    >
      <div className={styles.image}>
        <img src={image} />
        {isLoadMore && (
          <p className={styles.moreContext}>
            Load More
            <span>
              <FaChevronRight fill="white" />
            </span>
          </p>
        )}
      </div>
      <h1>{name}</h1>
      <p>{place}</p>
      <span>${price}</span>
      {isLoadMore && <div className={styles.grayLayer} />}
    </div>
  );
}
