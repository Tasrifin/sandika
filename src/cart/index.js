import Head from 'next/head';
import PropTypes from 'prop-types';

import { useContext } from 'react';
import { AppContext } from '@sandika_environment/context/app_context';

import Layout from '@sandika_components/core/Layout';
import Block from '@sandika_components/core/Block';

const Cart = ({ }) => {
  const { config } = useContext(AppContext).ctx.config.slider;
  const { header, navigation, filter, footer } = useContext(AppContext).ctx.page.cart.layout;

  return (
    <>
      {/* Head */}
      <Head>
        <title>Sandika</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Meta description test on sandika.org"></meta>
      </Head>

      {/* Body */}
      <Layout header={header} navigation={navigation} filter={filter} footer={footer}>
        <Block title={'Kerjanjang'}>

        </Block>
      </Layout>
    </>
  );
};

Cart.propTypes = {
  mainBannerImages: PropTypes.array,
  productData: PropTypes.array,
  promoBannerImages: PropTypes.array
};

export default Cart;
