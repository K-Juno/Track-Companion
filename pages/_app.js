import GlobalStyle from '../components/GlobalStyles';
import Layout from '../components/Layout';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [lyricsList, setLyricsList] = useState([]);

  function handleAddLyrics(newLyrics) {
    setLyricsList([newLyrics, ...lyricsList]);
  }

  const [updatedLyricsList, setUpdatedLyricsList] = useState([lyricsList]);

  function handleChangeValues(updatedLyrics) {
    setUpdatedLyricsList([updatedLyrics, ...updatedLyricsList]);
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>{Component.title}</title>
      </Head>
      <Layout>
        <ToastContainer />
        <Component
          {...pageProps}
          lyricsList={lyricsList}
          onAddLyrics={handleAddLyrics}
          onChangeValues={handleChangeValues}
        />
      </Layout>
    </>
  );
}

export default MyApp;
