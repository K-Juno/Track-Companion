import styled from 'styled-components';
import LandingPage from '../components/LandingPage';

Home.title = 'Track Companion | Home';

export default function Home() {
  return (
    <>
      <Title>Track Companion</Title>
      <LandingPage />
    </>
  );
}

const Title = styled.h1`
  text-align: center;
  font-size: 2.3rem;
`;
