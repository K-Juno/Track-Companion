import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function Footer() {
  const router = useRouter();

  return (
    <Foot pathname={router.pathname}>
      Created by
      <Link href="/aboutme">
        <About> @me </About>
      </Link>
      🤍
    </Foot>
  );
}

const Foot = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  background: ${(props) => (props.pathname == '/' ? '#302f5c' : 'transparent')};
  color: ${(props) => (props.pathname == '/' ? '#dfdfdf' : 'transparent')};

  &:hover {
    background: #302f5c;
    color: #dfdfdf;
  }
`;

const About = styled.a`
  cursor: pointer;

  &:hover {
    text-shadow: 0 0 8px #f7fffc, 0 0 8px #81d8c7;
  }
`;
