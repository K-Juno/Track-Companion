import Link from 'next/link';
import styled from 'styled-components';

export default function Nav() {
  return (
    <NavContainer>
      <nav>
        <Link href="/">
          <NavTag>Home</NavTag>
        </Link>
      </nav>
      <nav>
        <Link href="/lyrics">
          <NavTag>Lyrics</NavTag>
        </Link>
      </nav>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #40556b;
  padding: 1.1rem;
`;

const NavTag = styled.a`
  text-decoration: none;
  border: 0.1rem solid transparent;
  border-radius: 0.2rem;
  padding: 0.3rem;
  background-color: #7e8e96;
  color: #dfdfdf;
  cursor: pointer;
`;
