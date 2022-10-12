import styled from 'styled-components';

export const PageTitle = styled.h1`
  text-align: center;
  font-size: 1.6rem;
`;

export const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubTitle = styled.h3`
  text-align: center;
  border: 0.1rem solid #7e8e96;
  border-radius: 0.2rem;
  padding: 0.5rem;
  background-image: linear-gradient(-20deg, #f7f4ff 0%, #f3fffc 100%);
`;

export const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const CollectionLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin: 1.8rem;
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

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const BackLink = styled.a`
  text-decoration: none;
  border-radius: 0.2rem;
  padding: 0.5rem;
  background-color: #507d96;
  color: #dfdfdf;
  margin: 1.8rem;
  cursor: pointer;

  &:hover {
    background-color: #6791ab;
  }
`;

export const RemoveButton = styled.button`
  border: 0;
  background-color: transparent;
  border-radius: 15px;
  padding: 5px;
  width: 2rem;
  cursor: pointer;

  &:hover {
    background-color: #fdf7ff;
    border: 1px dotted #d9d5dc;
  }
`;
