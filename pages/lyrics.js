import styled from 'styled-components';
import Form from '../components/Form';

export default function Lyrics() {
  return (
    <>
      <Subtitle>Lyrics</Subtitle>
      <Form />
    </>
  );
}

const Subtitle = styled.h1`
  text-align: center;
  font-size: 1.6rem;
`;
