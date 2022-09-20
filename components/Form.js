import { useState } from 'react';
import styled from 'styled-components';

export default function Form() {
  const [title, setTitle] = useState('');
  const [lyrics, setLyrics] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setTitle(event.target.title.value);
    setLyrics(event.target.lyrics.value);
  }

  return (
    <>
      <OutputContainer>
        <Output>"{title ? title : ''}"</Output>
        <Output>{lyrics ? lyrics : ''}</Output>
      </OutputContainer>
      <InputForm onSubmit={handleSubmit}>
        Start creating your first idea:
        <div>
          <label for="title">Title: </label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <LyricsField
            type="text"
            placeholder="Keep your ideas rolling!"
            id="lyrics"
            name="lyrics"
            required
          />
        </div>
        <Button type="submit">You rock!</Button>
      </InputForm>
    </>
  );
}

const InputForm = styled.form`
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

const OutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
`;

const Output = styled.output`
  padding: 0.3rem;
  border: 0.1rem solid black;
  background-color: #e4e6e8;
`;
