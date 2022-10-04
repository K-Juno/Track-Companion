import styled from 'styled-components';
import Image from 'next/image';
import pencilIcon from '../public/pencil-icon.png';

export default function SongCard({ title, lyrics }) {
  return (
    <LyricsContainer>
      <EditButton>
        <Image alt="edit-pen icon" layout="responsive" src={pencilIcon} />
      </EditButton>
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
  background-color: #e9eefa;
  margin: 2rem;
  border-radius: 1rem;
`;

const NewTitle = styled.h4`
  padding: 0.3rem;
  width: fit-content;
  margin: 1.5rem 0 0 0;
  border-radius: 0.2rem;
  color: #dfdfdf;
  background-color: #313c4c;
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
  background-color: #313c4c;
`;

const EditButton = styled.button`
  border: 0.1rem solid #7e8e96;
  background-color: transparent;
  border-radius: 11px;
  padding: 3px;
  width: 2.2rem;
  color: white;
  cursor: pointer;
  position: fixed;
  top: 6.4rem;
  right: 3rem;

  &:hover {
    border: 0.1rem dotted #313c4c;
    border-radius: 15px;
    background-color: #ffffff;
  }
`;
