import styled from 'styled-components';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export default function Form({ onAddLyrics, id }) {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value.trim();
    const lyrics = form.lyrics.value.trim();

    const newLyrics = {
      id: id,
      title: title,
      lyrics: lyrics,
    };

    await fetch('/api/lyrics/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLyrics),
    });

    onAddLyrics(newLyrics);

    if (title.length < 1) {
      toast('u can find a longer title', {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'info',
        position: 'top-center',
      });
      return false;
    }

    if (lyrics.length < 3) {
      toast('u can find more words than that', {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'info',
        position: 'top-center',
      });
      return false;
    }

    router.push('/lyrics/collection');
  }

  return (
    <>
      <InputForm onSubmit={handleSubmit}>
        Start creating your first idea :
        <div>
          <label htmlFor="title">Title : </label>
          <TitleField
            type="text"
            id="title"
            name="title"
            maxLength="25"
            pattern="[A-Za-z0-9._$%/+-='!]+[A-Za-z0-9._$%/+-='! ]{1,}"
          />
        </div>
        <TextContainer>
          <label htmlFor="lyrics">Songtext : </label>
          <LyricsField
            type="text"
            placeholder="Keep your ideas rolling!"
            id="lyrics"
            name="lyrics"
            rows="15"
            maxLength="1000"
          />
        </TextContainer>
        <Button>LET&apos;S GO ✓</Button>
      </InputForm>
    </>
  );
}

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
  border: 0.1rem solid #343434;
  border-radius: 0.3rem;
  padding: 1.3rem;
  margin: 2rem;
  background-image: linear-gradient(-20deg, #194563 0%, #312f5d 100%);
  color: #dfdfdf;
`;

const TitleField = styled.input`
  margin-top: 1rem;
  width: 9rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const LyricsField = styled.textarea`
  width: 15rem;
  height: 18rem;
  box-shadow: 10px 10px 12px rgba(0, 0, 0, 0.1);
  border: 0.1rem solid #343434;
  border-radius: 0.2rem;
`;

const Button = styled.button`
  width: 6rem;
  height: 2.2rem;
  border-radius: 0.9rem;
  padding: 0.3rem;
  background-color: #bcebff;
  font-size: 0.9rem;
  color: #343434;
  cursor: pointer;
`;
