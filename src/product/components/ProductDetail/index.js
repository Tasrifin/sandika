import { useEffect, useState } from 'react';
import Block from '@sandika_components/core/Block';
import Button from '@sandika_components/commons/Button';
import PassionIcon from '@public/media/icons/passion.svg';
import StarIcon from '@public/media/icons/star.svg';
import * as theme from './productdetail.module.scss';

const ProductDetail = ({ style, children, ...props }) => {
  const { configurable_options, variants, __typename } = { ...props };
  const [activeProduct, setActiveProduct] = useState(variants[0].product);

  const styles = {
    product__detail: [theme['product__detail'], style].filter(Boolean).join(' '),
    product__sku: theme['product__sku'],
    product__price: theme['product__price'],
    product__price__final: theme['product__price__final'],
    product__price__regular: theme['product__price__regular'],
    product__name: theme['product__name'],
    product__price__discount: theme['product__price__discount'],
    product__merchants: theme['product__merchants'],
    product__merchants__seemore: theme['product__merchants__seemore'],
    product__rating: theme['product__rating'],
    product__wishlist: theme['product__wishlist']
  };

  return (
    <>
      <Block style={styles.product__detail}>
        <div className={styles.product__wishlist}>
          <PassionIcon />
        </div>
        <div className={styles.product__sku}>
          <h4>{`SKU #0986826348`}</h4>
        </div>
        <div className={styles.product__price}>
          <div className={styles.product__price__final}>
            <h2>{`Rp ${activeProduct.price_range.maximum_price.final_price.value}.000,-`}</h2>
          </div>
          <div className={styles.product__price__regular}>
            <small className={styles.product__price__discount}>60%</small>
            <h5>{`Rp ${activeProduct.price_range.maximum_price.regular_price.value}.000,-`}</h5>
          </div>
        </div>
        <div className={styles.product__name}>
          <h1>{activeProduct.name}</h1>
        </div>
        <div className={styles.product__merchants}>
          <p>
            <span>{'Dijual Oleh : '}</span>
            <strong>77 Komp</strong>
          </p>
          {/* <Button style={styles.product__merchants__seemore}>Lihat lebih banyak</Button> */}
          <div className={styles.product__rating}>
            <p>
              <span>Review : 4.5 </span>
              <span>
                <StarIcon />
              </span>
            </p>
          </div>
        </div>
        <div className={styles.product__short__description}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum, nisi sed
            gravida accumsan, turpis ex pharetra justo, eget accumsan ex nibh in augue. Curabitur
            vehicula neque tellus, sit amet eleifend risus commodo et. Vivamus sed purus lectus.
            Donec eleifend bibendum lacus, eget dapibus ante feugiat a. Quisque nec nisl non turpis
            tincidunt mollis eget in nisl. Mauris ut urna arcu. Nulla facilisi.
          </p>
        </div>
      </Block>
    </>
  );
};

export default ProductDetail;
