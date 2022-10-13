import styled from 'styled-components';
import LandingPage from '../components/LandingPage';
import Foot from '../components/Foot';

export default function Home() {
  return (
    <>
      <Title>Songwriting App</Title>
      <LandingPage />
      <Foot />
    </>
  );
}

const Title = styled.h1`
  text-align: center;
  font-size: 2.3rem;
`;
