import Link from 'next/link';
import {
  PageTitle,
  CollectionLink,
  CollectionLinkContainer,
} from '../../components/Styling';
import CloudinaryUpload from '../../components/Cloudinary';

export default function Recordings({}) {
  return (
    <>
      <PageTitle>Recordings</PageTitle>
      <CollectionLinkContainer>
        <span>Go to →</span>
        <Link href="/recordings/collection">
          <CollectionLink>Your awesome collection</CollectionLink>
        </Link>
      </CollectionLinkContainer>
      <CloudinaryUpload />
    </>
  );
}
