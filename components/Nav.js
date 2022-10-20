import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();

  return (
    <NavContainer>
      <nav>
        <Link href="/" passHref>
          <NavTag pathname={router.pathname}>Home</NavTag>
        </Link>
      </nav>
      <nav>
        <Link href="/lyrics" passHref>
          <NavTag pathname={router.pathname}>Lyrics</NavTag>
        </Link>
      </nav>
      <nav>
        <Link href="/recordings" passHref>
          <NavTag pathname={router.pathname}>Recordings</NavTag>
        </Link>
      </nav>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-image: linear-gradient(-20deg, #312f5d 0%, #194563 100%);
  padding: 1.3rem;
`;

const NavTag = styled.a`
  text-decoration: none;
  border-radius: 0.2rem;
  padding: 0.5rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.href === props.pathname ? '#81d8c7' : '#507d96'};
  color: ${(props) => (props.href === props.pathname ? '#343434' : '#dfdfdf')};

  &:hover {
    background-color: #97b7cb;
  }
`;
