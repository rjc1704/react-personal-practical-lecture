import styled from "styled-components";

import LetterCard from "./LetterCard";
import fakeData from "fakeData.json";

export default function LetterList({ activeMember }) {
  const filteredLetters = fakeData.filter(
    (letter) => letter.writedTo === activeMember
  );
  return (
    <ListWrapper>
      {filteredLetters.map((letter) => (
        <LetterCard key={letter.id} letter={letter} />
      ))}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  border-radius: 12px;
  padding: 12px;
`;
