import styled from 'styled-components';

export default function Lyrics() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Subtitle>Lyrics</Subtitle>
      <Form onSubmit={handleSubmit}>
        Start creating your first idea:
        <div>
          <label>Title: </label>
          <input type="text" />
        </div>
        <div>
          <LyricsField type="text" placeholder="Keep your ideas rolling!" />
        </div>
        <Button type="submit">You rock!</Button>
      </Form>
    </>
  );
}

const Subtitle = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
  border: 0.1rem solid black;
  padding: 1.3rem;
  margin: 2rem;
`;

const LyricsField = styled.input`
  width: 12rem;
  height: 18rem;
  box-shadow: 10px 10px 12px rgba(0, 0, 0, 0.1);
  border: 0.1rem solid black;
  border-radius: 0.2rem;
`;

const Button = styled.button`
  width: 5rem;
  border-radius: 0.3rem;
  padding: 0.3rem;
  background-color: #719c6d;
`;
