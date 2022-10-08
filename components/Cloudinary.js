import styled from 'styled-components';
import { useState } from 'react';

export default function CloudinaryUpload() {
  const [audio, setAudio] = useState(null);
  const [audioValue, setAudioValue] = useState('');
  const [audioFiles, setAudioFiles] = useState([]);

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
          setAudioFiles([
            ...audioFiles,
            {
              id: json.asset._id,
              src: json.secure_url,
              height: json.height,
              width: json.width,
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
        {/* {audio && <ImagePreview file={audio} />} */}
        <button type="submit">Upload audio file</button>
      </UploadForm>

      <ul>
        {audioFiles.map((audio) => {
          return (
            <li key={audio.id}>
              {/* <Image
                src={audio.src}
                height={audio.height}
                width={audio.width}
                alt=""
              /> */}
            </li>
          );
        })}
      </ul>
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
  margin: 2rem;
  background-image: linear-gradient(-20deg, #194563 0%, #312f5d 100%);
  color: #dfdfdf;
`;

const UploadField = styled.input`
  background: white;
  margin-top: 1rem;
  border-radius: 0.2rem;
`;
