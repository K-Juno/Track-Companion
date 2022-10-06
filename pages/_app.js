import GlobalStyle from '../components/GlobalStyles';
import Layout from '../components/Layout';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
      <Layout>
        <Component
          {...pageProps}
          lyricsList={lyricsList}
          onAddLyrics={handleAddLyrics}
          onChangeValues={handleChangeValues}
        />
        <ToastContainer />
      </Layout>
    </>
  );
}

export default MyApp;
