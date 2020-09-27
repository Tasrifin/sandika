import Product from '@sandika_src/product';

export async function getServerSideProps() {
  // EXAMPLE GET CONFIGURABLE PRODUCTS
  const configurableProductFetch = await fetch(
    'http://localhost:3000/api/example/product_configurable'
  );
  const configurableProductResponse = await configurableProductFetch.json();

  // IMAGE SLIDER DATA - (MAIN BANNER)
  const mainBannerImages = [
    { src: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', alt: 'Independence Day' },
    {
      src: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      alt: 'Special Offer'
    }
  ];

  // IMAGE SLIDER DATA - (PROMO BANNER)
  const promoBannerImages = [
    {
      src:
        'https://shop.redq.now.sh/_next/static/images/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png',
      alt: 'Free Delivery'
    },
    {
      src:
        'https://shop.redq.now.sh/_next/static/images/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png',
      alt: 'Coupon Saving'
    },
    {
      src:
        'https://shop.redq.now.sh/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png',
      alt: 'Gift Voucher'
    }
  ];

  return {
    props: {
      namespacesRequired: ['core'],
      mainBannerImages: mainBannerImages,
      promoBannerImages: promoBannerImages,
      productData: configurableProductResponse
    }
  };
}

export default Product;
