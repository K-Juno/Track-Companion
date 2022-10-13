import styled from 'styled-components';

export const PageTitle = styled.h1`
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 0;
`;

export const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubTitle = styled.h3`
  text-align: center;
  border: 1px solid #7e8e96;
  border-radius: 0.2rem;
  padding: 0.5rem;
  background-image: linear-gradient(-20deg, #f0eaff 0%, #e6fff9 100%);
`;

export const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 90%;
  border: 1px solid #7e8e96;
  justify-content: center;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  background-color: #f7fffc;
  border-radius: 0.2rem;
`;

export const SubSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const CollectionLinkContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
`;

export const CollectionLink = styled.a`
  text-decoration: none;
  border-radius: 0.2rem;
  padding: 0.5rem;
  background-color: #507d96;
  color: #dfdfdf;
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
  height: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #daecfb;
    border: 1px dotted #c6d5e2;
  }
`;
