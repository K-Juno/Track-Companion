import styled from 'styled-components';
import LandingPage from '../components/LandingPage';

export default function Home() {
  return (
    <>
      <Title>Songwriting App</Title>
      <LandingPage></LandingPage>
    </>
  );
}

const Title = styled.h1`
  text-align: center;
  font-size: 2.3rem;
`;
