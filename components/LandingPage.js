import Link from 'next/link';
import styled from 'styled-components';
import writer from '../public/writer.svg';
import recording from '../public/audio.svg';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <>
      <LandingContainer>
        <Link href="/lyrics" passHref>
          <Pic1>
            <Image
              alt="writer illustration"
              layout="responsive"
              src={writer}
              height={100}
              width={100}
            />
          </Pic1>
        </Link>
        <Text1>Start Creating Your Lyrics !</Text1>
        <Text2>OR</Text2>
        <Text3>Start Uploading Your Recordings !</Text3>
        <Link href="/recordings" passHref>
          <Pic2>
            <Image
              alt="recording illustration"
              layout="responsive"
              src={recording}
              height={100}
              width={200}
            />
          </Pic2>
        </Link>
      </LandingContainer>
    </>
  );
}

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0.8rem 2rem 0.8rem;
  font-family: 'Homemade Apple', cursive;
  font-size: 0.9rem;
`;

const Pic1 = styled.div`
  align-self: flex-start;
  margin-left: 1.2rem;
  width: 8rem;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(-20deg, #f0eaff 0%, #e6fff9 100%);
    border: 1px dotted #c6d5e2;
    border-radius: 1rem;
  }
`;

const Pic2 = styled(Pic1)`
  align-self: flex-end;
  margin-left: 0;
  width: 13rem;
`;

const Text1 = styled.p`
  text-align: start;
  margin: 0;
`;

const Text2 = styled(Text1)`
  text-align: center;
  margin: 0.8rem 0 0.8rem 0;
`;

const Text3 = styled(Text1)`
  text-align: end;
`;
