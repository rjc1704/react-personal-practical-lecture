import styled from "styled-components";

import LetterCard from "./LetterCard";

export default function LetterList({ activeMember, letters }) {
  const filteredLetters = letters.filter(
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
