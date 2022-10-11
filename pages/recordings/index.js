import {
  PageTitle,
  SubTitleContainer,
  SubTitle,
  ListContainer,
} from '../../components/Styling';
import CloudinaryUpload from '../../components/Cloudinary';
import styled from 'styled-components';
import getAllAudio from '../../services/audioService';
import { useState } from 'react';

export async function getServerSideProps() {
  const audio = await getAllAudio();
  console.log(audio);
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
