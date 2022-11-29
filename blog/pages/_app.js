import Script from 'next/script';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/base.scss';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />

            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            ></Script>
        </>
    );
}

export default MyApp;
