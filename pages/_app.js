import GlobalStyle from '../components/GlobalStyles';
import Layout from '../components/Layout';
import useLocalStorage from '../hooks/useLocalStorage';

function MyApp({ Component, pageProps }) {
  const [lyricsList, setLyricsList] = useLocalStorage('_lyricsList', []);
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
