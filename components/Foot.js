import styled from 'styled-components';

export default function Home() {
  return <Foot>Created by me 🤍</Foot>;
}

const Foot = styled.div`
  background: #302f5c;
  color: #dfdfdf;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.5rem;
  text-align: center;
`;
