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
  background-color: #e4e6e8;
  margin: 2rem;
  border-radius: 1rem;
`;

const NewTitle = styled.h4`
  padding: 0.3rem;
  border: 0.1rem solid black;
  width: fit-content;
  margin-top: 2rem;
  border-radius: 0.2rem;
`;

const NewText = styled.p`
  padding: 0.8rem;
  border: 0.1rem solid black;
  background-color: #e4e6e8;
  height: fit-content;
  min-height: 5rem;
  width: 15rem;
  margin-bottom: 2rem;
  font-size: 15px;
  border-radius: 0.2rem;
  word-break: break-word;
`;
