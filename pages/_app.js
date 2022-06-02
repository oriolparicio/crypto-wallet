import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';
// Global Styles
import '../_global.scss';
// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function WalletApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null;
  }, [router.events]);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
