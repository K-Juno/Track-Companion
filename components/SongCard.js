import styled from 'styled-components';

export default function SongCard({ title, lyrics }) {
  return (
    <LyricsContainer>
      <NewTitle>&quot;{title}&quot;</NewTitle>
      <NewText style={{ whiteSpace: 'pre-line' }}>{lyrics}</NewText>
    </LyricsContainer>
  );
}

const LyricsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(-20deg, #e1eeff 0%, #f4ffff 100%);
  margin: 3rem;
  border-radius: 1rem;
  box-shadow: 10px 10px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const NewTitle = styled.h4`
  padding: 0.3rem;
  margin: 1.3rem 1.8rem 0 1.8rem;
  border-radius: 0.2rem;
  color: #dfdfdf;
  background-color: #1b4362;
`;

const NewText = styled.p`
  padding: 1rem;
  background-color: #f6f8ff;
  max-width: 14.5rem;
  margin: 2rem 0 1rem 0;
  font-size: 14px;
  border-radius: 0.4rem;
  word-break: break-word;
  color: #dfdfdf;
  background-color: #1b4362;
`;
