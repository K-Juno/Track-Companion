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
import trashIcon from '../../public/icon-trash.svg';
import compose from '../../public/compose.svg';
import recording from '../../public/audio.svg';
import Image from 'next/image';

export async function getServerSideProps() {
  const audio = await getAllAudio();

  return {
    props: {
      audio,
    },
  };
}

Recordings.title = 'Track Companion | Recordings';

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
        <Pic1>
          <Image
            alt="composer illustration"
            layout="responsive"
            src={compose}
            height={85}
            width={70}
          />
        </Pic1>
        <Pic2>
          <Image
            alt="recording illustration"
            layout="responsive"
            src={recording}
            height={85}
            width={100}
          />
        </Pic2>
      </ImageContainer>
      <SubTitleContainer>
        <SubTitle>Your awesome collection</SubTitle>
      </SubTitleContainer>
      <ListContainer>
        {audioList.map((audioFile) => (
          <>
            <ListObject key={audioFile.id}>
              <p>title: {audioFile.name}</p>
              <MediaPlayer>
                <Video controls autoplay name="media">
                  <source src={audioFile.src} type="audio/mpeg" />
                </Video>
                <RemoveButton onClick={() => removeAudio(audioFile.id)}>
                  <Trash>
                    <Image
                      alt="trash icon"
                      layout="responsive"
                      src={trashIcon}
                      height={100}
                      width={100}
                    />
                  </Trash>
                </RemoveButton>
              </MediaPlayer>
            </ListObject>
          </>
        ))}
      </ListContainer>
    </>
  );
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Pic1 = styled.div`
  height: 6rem;
  width: 5rem;
`;

const Pic2 = styled(Pic1)`
  width: 8rem;
`;

const ListObject = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  border: 1px solid #7e8e96;
  padding-bottom: 1rem;
  background-color: #f7fffc;
  border-radius: 0.2rem;
`;

const MediaPlayer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Video = styled.video`
  height: 30px;
  width: 210px;
`;

const Trash = styled.div`
  width: 1.3rem;
`;
