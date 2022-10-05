import GlobalStyle from '../components/GlobalStyles';
import Layout from '../components/Layout';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [lyricsList, setLyricsList] = useState([]);

  function handleAddLyrics(newLyrics) {
    setLyricsList([newLyrics, ...lyricsList]);
  }

  const [updatedLyricsList, setUpdatedLyricsList] = useState([lyricsList]);

  function handleChangeLyrics(updatedLyrics) {
    setUpdatedLyricsList([updatedLyrics, ...updatedLyricsList]);
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          lyricsList={lyricsList}
          onAddLyrics={handleAddLyrics}
          onChangeLyrics={handleChangeLyrics}
        />
      </Layout>
    </>
  );
}

export default MyApp;
