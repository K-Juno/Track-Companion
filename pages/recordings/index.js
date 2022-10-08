import Link from 'next/link';
import CloudinaryUpload from '../../components/Cloudinary';
import {
  PageTitle,
  CollectionLink,
  CollectionLinkContainer,
} from '../../components/Styling';

export default function Recordings({}) {
  return (
    <>
      <PageTitle>Recordings</PageTitle>
      <CollectionLinkContainer>
        <span>Go to →</span>
        <Link href="/recordings/collection">
          <CollectionLink>ur awesome collection</CollectionLink>
        </Link>
      </CollectionLinkContainer>
      <CloudinaryUpload />
    </>
  );
}
