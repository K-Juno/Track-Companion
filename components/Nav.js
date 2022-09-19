import Link from 'next/link';
import styled from 'styled-components';

export default function Nav() {
  return (
    <NavTag>
      <Link href="/lyrics">
        <a>Lyrics</a>
      </Link>
    </NavTag>
  );
}

const NavTag = styled.nav`
  text-decoration: none;
`;
