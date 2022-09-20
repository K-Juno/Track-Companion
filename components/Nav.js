import Link from 'next/link';
import styled from 'styled-components';

export default function Nav() {
  return (
    <NavContainer>
      <nav>
        <Link href="/lyrics">
          <A>Lyrics</A>
        </Link>
      </nav>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e4e6e8;
  padding: 1.1rem;
`;

const A = styled.a`
  text-decoration: none;
  border: 0.1rem solid transparent;
  border-radius: 0.2rem;
  padding: 0.3rem;
  background-color: #708090;
`;
