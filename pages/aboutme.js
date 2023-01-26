import Contact from '../components/Contact';
import { SubHeader } from '../components/Contact';
import Image from 'next/image';
import styled from 'styled-components';
import webdev from '../public/webdev.svg';

AboutMe.title = 'Track Companion | About Me';

export default function AboutMe() {
  return (
    <>
      <WelcomeHeader>
        <Header1>welcome !</Header1>
        <IconPic>
          <Image
            alt="coding woman illustration"
            layout="responsive"
            src={webdev}
            height={100}
            width={100}
          />
        </IconPic>
      </WelcomeHeader>
      <PageContainer>
        <Epilogue>
          I&apos;m Juni! Thanks for stopping by!
          <br />
          <br />
          I feel humbled in this great big world full of coding experts, but am
          also excited to mark my new path as a super-nouveau Web Developer with
          my final project for my Coding Bootcamp.
          <br />
          <br />
        </Epilogue>
        <Contact />
        <SubHeader>quick thank you :</SubHeader>
        <OrderedList>
          <li>
            To my coaches &amp; classmates at the{' '}
            <Highlight
              href="https://www.neuefische.de"
              target="_blank"
              rel="noreferrer"
            >
              neuefische
            </Highlight>{' '}
            Web Dev Bootcamp!
          </li>
          <li>
            Neat open-source illustrations from{' '}
            <Highlight
              href="https://undraw.co"
              target="_blank"
              rel="noreferrer"
            >
              unDraw
            </Highlight>
            !
          </li>
        </OrderedList>
      </PageContainer>
    </>
  );
}

const WelcomeHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  margin-top: 1rem;
`;

const Header1 = styled(SubHeader)`
  font-size: 1.5rem;
  color: #1e4153;
  margin: 2rem 0 1rem 0;
`;

const IconPic = styled.div`
  width: 7.5rem;
  position: absolute;
  right: 0rem;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem 0 2rem;
`;

const Epilogue = styled.p`
  text-align: center;
  margin: 0 0 2rem 0;
`;

export const OrderedList = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: upper-roman;
  gap: 0.8rem;
`;

const Highlight = styled.a`
  text-decoration: none;
  border-radius: 0.1rem;
  background-image: linear-gradient(-20deg, #f0eaff 0%, #cefaff 100%);

  &:hover {
    color: white;
    background-image: linear-gradient(-20deg, #dacbff 0%, #a6f6ff 100%);
  }
`;
