import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/router';

export default function Form({ onAddLyrics }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value.trim();
    const lyrics = form.lyrics.value.trim();

    const newLyrics = {
      id: nanoid(),
      title: title,
      lyrics: lyrics,
    };

    onAddLyrics(newLyrics);

    form.reset();
    form.title.focus();
  }

  return (
    <>
      <InputForm onSubmit={handleSubmit}>
        Start creating your first idea:
        <div>
          <label for="title">Title: </label>
          <TitleField
            type="text"
            id="title"
            name="title"
            required
            maxLength="25"
          />
        </div>
        <div>
          <LyricsField
            type="text"
            placeholder="Keep your ideas rolling!"
            id="lyrics"
            name="lyrics"
            required
            rows="15"
            maxLength="1000"
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

const TitleField = styled.input`
  width: fit-content;
`;

const LyricsField = styled.textarea`
  width: fit-content;
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
