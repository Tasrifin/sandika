// GLOBAL STYLE
import '@environment/styles/core.scss';

// PROPTYPES CHECKING
import PropTypes from 'prop-types';

// APOLLO
import { ApolloProvider } from '@apollo/client';
import client from '@environment/apollo';
import AppContextProvider from '@environment/context/app_context';

// Locales / Translation / Language , ROUTING
import { appWithTranslation, Router } from '@environment/i18n';

// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
// ADD THIS LINE TO CALL FONT AWESOME USING NAME OF ICON
library.add(faShoppingCart, faBars);

const Sandika = ({ Component, pageProps }) => {

  return (
    <AppContextProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </AppContextProvider>
  );
};

Sandika.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};

Sandika.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default appWithTranslation(Sandika);
