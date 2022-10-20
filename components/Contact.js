import Image from 'next/image';
import styled from 'styled-components';
import github from '../public/github.svg';
import linkedin from '../public/linkedin.svg';
import mail from '../public/mail.svg';
import insta from '../public/insta.svg';

export default function Contact() {
  return (
    <>
      <SubHeader>please feel free to reach out :</SubHeader>
      <UnorderedList>
        <li>
          <a href="https://github.com/K-Juno" target="_blank" rel="noreferrer">
            <Icon>
              <Image
                alt="GitHub"
                layout="responsive"
                src={github}
                height={100}
                width={100}
              />
            </Icon>
          </a>
        </li>
        |
        <li>
          <a
            href="https://www.linkedin.com/in/juni-ko-b35395179"
            target="_blank"
            rel="noreferrer"
          >
            <Icon>
              <Image
                alt="LinkedIn"
                layout="responsive"
                src={linkedin}
                height={100}
                width={100}
              />
            </Icon>
          </a>
        </li>
        |
        <li>
          <a href="mailto:juno1803@gmail.com" target="_blank" rel="noreferrer">
            <Icon>
              <Image
                alt="Email"
                layout="responsive"
                src={mail}
                height={100}
                width={100}
              />
            </Icon>
          </a>
        </li>
        |
        <li>
          <a
            href="https://www.instagram.com/juno.juni.june"
            target="_blank"
            rel="noreferrer"
          >
            <Icon>
              <Image
                alt="Instagram"
                layout="responsive"
                src={insta}
                height={100}
                width={100}
              />
            </Icon>
          </a>
        </li>
      </UnorderedList>
    </>
  );
}

export const SubHeader = styled.h4`
  font-family: 'Homemade Apple', cursive;
  text-align: center;
  margin: 0;
`;

const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0;
  margin: 0 0 2rem 0;
  font-size: 1.5rem;
`;

const Icon = styled.div`
  width: 1rem;
  height: 1rem;
  margin-top: 0.3rem;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(-20deg, #dacbff 0%, #a6f6ff 100%);
    border: 1px dotted #c6d5e2;
    border-radius: 0.2rem;
  }
`;
