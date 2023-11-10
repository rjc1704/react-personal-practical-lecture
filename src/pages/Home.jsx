import AddForm from "components/AddForm";
import Header from "components/Header";
import LetterList from "components/LetterList";
import { useState } from "react";
import styled from "styled-components";

export default function Home() {
  const [activeMember, setActiveMember] = useState("카리나");

  return (
    <Container>
      <Header activeMember={activeMember} setActiveMember={setActiveMember} />
      <AddForm />
      <LetterList activeMember={activeMember} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
