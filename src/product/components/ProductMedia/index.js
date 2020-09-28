import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import Block from '@sandika_components/core/Block';
import ProductMediaOptions from '@sandika_src/product/components/ProductMediaOptions';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './productmedia.module.scss';

const Slider = dynamic(() => import('react-owl-carousel'), {
  ssr: false
});

const ProductMedia = ({ config, ...props }) => {
  const { configurable_options, variants, __typename } = { ...props };
  const [isMount, setIsMount] = useState(false);

  const [activeOptions, setActiveOptions] = useState(variants[0].attributes);
  const [activeProduct, setActiveProduct] = useState(variants[0].product);
  const [imageGallery, setImageGallery] = useState(activeProduct.media_gallery)

  useEffect(() => {
    window.jQuery = $;
    window.$ = $;
    global.jQuery = $;
    setIsMount(true);

    return () => {
      window.jQuery = undefined;
      window.$ = undefined;
      global.jQuery = undefined;
      setIsMount(false);
    };
  }, []);

  const handleOptionsChange = () => {
    return null
  };

  if (isMount) {
    return (
      <>
        <Block style={'product__media__images'}>
          <Slider {...config}>
            {imageGallery.map((data, i) => {
              return <img src={data.url} alt={data.alt} key={i} />;
            })}
          </Slider>
        </Block>

        <Block style={'product__media__description'}>
          <div className={'product__sku'}>
            <h4>{`#${activeProduct.sku}`}</h4>
          </div>
          <div className={'product__name'}>
            <h1>{activeProduct.name}</h1>
          </div>
          <div className={'product__price'}>
            <div className={'product__price__regular'}><h5>{`USD ${activeProduct.price_range.maximum_price.regular_price.value}`}</h5></div>
            <div className={'product__price__final'}><h4>{`USD ${activeProduct.price_range.maximum_price.final_price.value}`}</h4></div>
          </div>
        </Block>

        <Block style={'product__desription'}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </Block>

        {__typename === 'ConfigurableProduct' ? <ProductMediaOptions options={configurable_options} activeOptions={activeOptions} /> : null}
      </>
    );
  }

  return null;
};

export default ProductMedia;
