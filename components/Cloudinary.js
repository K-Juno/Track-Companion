import styled from 'styled-components';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import trashIcon from '../public/trash-icon.png';

export default function CloudinaryUpload() {
  const [audio, setAudio] = useState(null);
  const [audioValue, setAudioValue] = useState('');
  const [audioFiles, setAudioFiles] = useState([]);

  async function removeAudio(id) {
    setAudioFiles(
      audioFiles.filter((audio) => {
        return audio.id !== id;
      })
    );
  }

  return (
    <>
      <UploadForm
        onSubmit={async (event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          formData.append('file', audio);
          formData.append(
            'upload_preset',
            process.env.NEXT_PUBLIC_UPLOAD_PRESET
          );
          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/upload`,
            {
              method: 'POST',
              body: formData,
            }
          );
          const json = await response.json();
          console.log(json);

          if (audioValue === '') {
            toast('Your haven`t selected a file!', {
              hideProgressBar: true,
              autoClose: 1000,
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

          setAudioFiles([
            ...audioFiles,
            {
              id: json.asset_id,
              src: json.secure_url,
            },
          ]);
        }}
      >
        <label htmlFor="file">Select your audio file here : </label>
        <UploadField
          multiple={false}
          accept="audio/wav, audio/mp3"
          id="file"
          type="file"
          value={audioValue}
          onChange={(event) => {
            setAudioValue(event.target.value);
            setAudio(event.target.files[0]);
          }}
        />
        <button type="submit">Upload audio file</button>
      </UploadForm>
      <ListContainer>
        {audioFiles.map((audio) => {
          return (
            <li key={audio.id}>
              <Video controls autoplay name="media">
                <source src={audio.src} type="audio/mpeg" />
              </Video>
            </li>
          );
        })}
      </ListContainer>
    </>
  );
}

const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
  border-radius: 0.3rem;
  padding: 1.3rem;
  margin: 1.8rem;
  background-image: linear-gradient(-20deg, #194563 0%, #312f5d 100%);
  color: #dfdfdf;
`;

const UploadField = styled.input`
  background: white;
  margin-top: 1rem;
  border-radius: 0.2rem;
`;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  margin-top: 0;
`;

const Video = styled.video`
  height: 55px;
  width: 300px;
`;
