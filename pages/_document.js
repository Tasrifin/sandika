import Document, { Html, Head, Main, NextScript } from 'next/document'

class SandikaDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        const { query } = ctx;
        const lang = query.lang === "en" ? "en" : "id";

        return { ...initialProps, lang };
    }

    render() {
        const { lang } = this.props;

        return (
            <Html lang={lang}>
                <Head>
                    <meta name="theme-color" content={"#cd134b"} />
                    <meta name="description" content="Buy beautiful, high quality carpets for your home." />
                    <title>Sandika Developement Site</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    };
};

export default SandikaDocument