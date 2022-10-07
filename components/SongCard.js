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
  margin: 2rem;
  border-radius: 1rem;
`;

const NewTitle = styled.h4`
  padding: 0.3rem;
  width: fit-content;
  margin: 1.5rem 0 0 0;
  border-radius: 0.2rem;
  color: #dfdfdf;
  background-color: #1b4362;
`;

const NewText = styled.p`
  padding: 0.8rem;
  background-color: #f6f8ff;
  height: fit-content;
  min-height: 5rem;
  width: 15rem;
  margin-bottom: 2rem;
  font-size: 14px;
  border-radius: 0.4rem;
  word-break: break-word;
  color: #dfdfdf;
  background-color: #1b4362;
`;
