import {
  PageTitle,
  SubTitleContainer,
  SubTitle,
  ListContainer,
  RemoveButton,
} from '../../components/Styling';
import CloudinaryUpload from '../../components/Cloudinary';
import styled from 'styled-components';
import getAllAudio from '../../services/audioService';
import { useState } from 'react';
import Image from 'next/image';
import trashIcon from '../../public/trash-icon.png';

export async function getServerSideProps() {
  const audio = await getAllAudio();

  return {
    props: {
      audio,
    },
  };
}

export default function Recordings({ audio }) {
  const [audioList, setAudioList] = useState(audio);

  function handleAddAudio(newAudio) {
    setAudioList([newAudio, ...audioList]);
  }

  const [audioFileList, setAudioFileList] = useState(audioList);

  async function removeAudio(id) {
    await fetch(`/api/audioFiles/${id}`, {
      method: 'DELETE',
    });
    setAudioFileList(
      audioFileList.filter((audioFile) => {
        return audioFile.id !== id;
      })
    );
  }

  return (
    <>
      <PageTitle>Recordings</PageTitle>
      <CloudinaryUpload onAddAudio={handleAddAudio} />
      <SubTitleContainer>
        <SubTitle>Your awesome collection</SubTitle>
      </SubTitleContainer>
      <ListContainer>
        {audioList.map((audioFile) => (
          <>
            <ListItem key={audioFile.id}>
              <Video controls autoplay name="media">
                <source src={audioFile.src} type="audio/mpeg" />
              </Video>
              <RemoveButton onClick={() => removeAudio(audioFile.id)}>
                <Image alt="trash icon" layout="responsive" src={trashIcon} />
              </RemoveButton>
            </ListItem>
          </>
        ))}
      </ListContainer>
    </>
  );
}

const Video = styled.video`
  height: 55px;
  width: 300px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
