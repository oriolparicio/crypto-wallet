import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Global Styles
import '../_global.scss';

// Reudx
import { Provider } from 'react-redux';
import { store } from '../redux/api/store';

export default function WalletApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null;
  }, [router.events]);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
