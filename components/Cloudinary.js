import styled from 'styled-components';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function CloudinaryUpload({ onAddAudio }) {
  const [audio, setAudio] = useState(null);
  const [audioValue, setAudioValue] = useState('');

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

          if (audioValue === '') {
            toast('You haven`t selected a file!', {
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

          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/upload`,
            {
              method: 'POST',
              body: formData,
            }
          );
          const json = await response.json();
          console.log(json);

          const newAudio = {
            id: json.asset_id,
            src: json.secure_url,
          };

          const response_ = await fetch('/api/audioFiles/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAudio),
          });
          const fileInDB = await response_.json();

          onAddAudio(fileInDB);
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
  margin: 1.8rem 1.8rem 1rem 1.8rem;
  background-image: linear-gradient(-20deg, #194563 0%, #312f5d 100%);
  color: #dfdfdf;
`;

const UploadField = styled.input`
  background: white;
  margin-top: 1rem;
  border-radius: 0.2rem;
`;
