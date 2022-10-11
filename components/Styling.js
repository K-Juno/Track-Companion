import styled from 'styled-components';

export const PageTitle = styled.h1`
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
`;

export const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 3rem 0;
`;

export const SubTitle = styled.h3`
  text-align: center;
  border: 0.1rem solid #7e8e96;
  border-radius: 0.2rem;
  padding: 0.5rem;
  margin: 0;
  background-image: linear-gradient(-20deg, #f7f4ff 0%, #f3fffc 100%);
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-right: 2rem;
`;

export const CollectionLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-right: 1.8rem;
`;

export const CollectionLink = styled.a`
  text-decoration: none;
  border-radius: 0.2rem;
  padding: 0.5rem;
  background-color: #507d96;
  color: #dfdfdf;
  margin-bottom: 0;
  cursor: pointer;

  &:hover {
    background-color: #6791ab;
  }
`;

export const BackLink = styled.a`
  text-decoration: none;
  border-radius: 0.2rem;
  padding: 0.5rem;
  background-color: #507d96;
  color: #dfdfdf;
  margin-bottom: 1.8rem;
  cursor: pointer;

  &:hover {
    background-color: #6791ab;
  }
`;
