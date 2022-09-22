import { useState } from 'react';
import styled from 'styled-components';

export default function Form() {
  const [title, setTitle] = useState('');
  const [lyrics, setLyrics] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    setTitle(form.title.value.trim());
    setLyrics(form.lyrics.value.trim());
    form.reset();
    form.title.focus();
  }

  return (
    <>
      {title && lyrics && (
        <OutputContainer>
          <Output1>{title}</Output1>
          <Output2>{lyrics}</Output2>
        </OutputContainer>
      )}

      <InputForm onSubmit={handleSubmit}>
        Start creating your first idea:
        <div>
          <label for="title">Title: </label>
          <input type="text" id="title" name="title" required maxlength="43" />
        </div>
        <div>
          <LyricsField
            type="text"
            placeholder="Keep your ideas rolling!"
            id="lyrics"
            name="lyrics"
            required
            rows="15"
            maxlength="100"
          />
        </div>
        <Button>Done!</Button>
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

const LyricsField = styled.textarea`
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
  text-align: center;
  gap: 1.1rem;
  background-color: #e4e6e8;
  margin: 2rem;
`;

const Output1 = styled.output`
  padding: 0.3rem;
  border: 0.1rem solid black;
  width: 10rem;
  margin-top: 1rem;
`;

const Output2 = styled.output`
  padding: 0.3rem;
  border: 0.1rem solid black;
  background-color: #e4e6e8;
  width: 13rem;
  height: 8rem;
  margin-bottom: 1rem;
`;
