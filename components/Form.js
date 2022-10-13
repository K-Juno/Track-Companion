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

    if (title.length < 1) {
      toast('Your Title is empty!', {
        hideProgressBar: true,
        autoClose: 500,
        type: 'info',
        position: 'top-center',
      });
      return false;
    }

    if (lyrics.length < 1) {
      toast('Your Songtext is empty!', {
        hideProgressBar: true,
        autoClose: 500,
        type: 'info',
        position: 'top-center',
      });
      return false;
    } else {
      toast('Good job!', {
        hideProgressBar: true,
        autoClose: 500,
        type: 'success',
        position: 'top-center',
      });
    }

    await fetch('/api/lyrics/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLyrics),
    });

    onAddLyrics(newLyrics);

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
        <Button>SAVE ✓</Button>
      </InputForm>
    </>
  );
}

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
  border-radius: 0.3rem;
  padding: 1.3rem;
  margin: 0 1.8rem 1.8rem 1.8rem;
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
  height: 15rem;
  border-radius: 0.2rem;
  background-image: linear-gradient(-20deg, #e6fff9 0%, #f5f1ff 100%);
`;

const Button = styled.button`
  width: 5.3rem;
  height: 2.5rem;
  border-radius: 1.2rem;
  padding: 0.3rem;
  background-color: #81d8c7;
  font-size: 0.9rem;
  color: #343434;
  cursor: pointer;
  box-shadow: 4px 4px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #b1ebe1;
    transform: translateY(2px);
  }

  &:active {
    box-shadow: 0 5px #666;
  }
`;
