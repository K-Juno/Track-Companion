import {
  PageTitle,
  SubTitleContainer,
  SubTitle,
  ListContainer,
  ListItem,
  RemoveButton,
  Trash,
} from '../../components/Styling';
import CloudinaryUpload from '../../components/Cloudinary';
import styled from 'styled-components';
import getAllAudio from '../../services/audioService';
import { useState } from 'react';
import trashIcon from '../../public/icon-trash.svg';
import compose from '../../public/compose.svg';
import recording from '../../public/audio.svg';

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

  async function removeAudio(id) {
    await fetch(`/api/audioFiles/${id}`, {
      method: 'DELETE',
    });
    setAudioList(
      audioList.filter((audioFile) => {
        return audioFile.id !== id;
      })
    );
  }

  return (
    <>
      <PageTitle>Recordings</PageTitle>
      <CloudinaryUpload onAddAudio={handleAddAudio} />
      <ImageContainer>
        <img
          alt="composer illustration"
          layout="responsive"
          src={compose}
          height={75}
          width="auto"
        />
        <img
          alt="recording illustration"
          layout="responsive"
          src={recording}
          height="auto"
          width={130}
        />
      </ImageContainer>
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
                <Trash alt="trash icon" layout="responsive" src={trashIcon} />
              </RemoveButton>
            </ListItem>
          </>
        ))}
      </ListContainer>
    </>
  );
}

const Video = styled.video`
  height: 30px;
  width: 210px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: flex-end;
`;
