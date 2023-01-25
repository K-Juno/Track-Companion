import styled from 'styled-components';
import LandingPage from '../components/LandingPage';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Track Companion</title>
      </Head>
      <Title>Track Companion</Title>
      <LandingPage />
    </>
  );
}

const Title = styled.h1`
  text-align: center;
  font-size: 2.3rem;
`;
