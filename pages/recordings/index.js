import {
  PageTitle,
  SubTitleContainer,
  SubTitle,
} from '../../components/Styling';
import CloudinaryUpload from '../../components/Cloudinary';

export default function Recordings() {
  return (
    <>
      <PageTitle>Recordings</PageTitle>
      <CloudinaryUpload />
      <SubTitleContainer>
        <SubTitle>Your awesome collection</SubTitle>
      </SubTitleContainer>
    </>
  );
}
