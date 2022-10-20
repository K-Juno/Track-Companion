import Nav from './Nav';
import styled from 'styled-components';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  margin: auto;
  max-width: 28rem;
`;
