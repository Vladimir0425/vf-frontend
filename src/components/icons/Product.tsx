import ProductSvg from '@/assets/common/icons/Product.svg';
import clsx from 'clsx';

export interface IProductIconProps {
  onClick?: () => void;
  className?: string;
}

export function ProductIcon({ className, ...attrs }: IProductIconProps) {
  return (
    <img
      alt="Product Icon"
      src={ProductSvg}
      className={clsx('h-10 w-10', className)}
      {...attrs}
    />
  );
}
