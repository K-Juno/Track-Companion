import GlobalStyle from '../components/GlobalStyles';
import Layout from '../components/Layout';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [lyricsList, setLyricsList] = useState([]);

  function handleAddLyrics(newLyrics) {
    setLyricsList([newLyrics, ...lyricsList]);
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          lyricsList={lyricsList}
          onAddLyrics={handleAddLyrics}
        />
      </Layout>
    </>
  );
}

export default MyApp;
