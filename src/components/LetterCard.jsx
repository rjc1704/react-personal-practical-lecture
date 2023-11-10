import styled from "styled-components";
import defaultUser from "assets/defaultUser.png";

export default function LetterCard({ letter }) {
  const formattedDate = new Date(letter.createdAt).toLocaleDateString("ko", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <LetterWrapper>
      <UserInfo>
        <AvatarFigure>
          <img src={letter.avatar ?? defaultUser} alt="아바타이미지" />
        </AvatarFigure>
        <NicknameAndDate>
          <p>{letter.nickname}</p>
          <time>{formattedDate}</time>
        </NicknameAndDate>
      </UserInfo>
      <Content>{letter.content}</Content>
    </LetterWrapper>
  );
}

const LetterWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: white;
  padding: 12px;
  border: 1px solid white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

const UserInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const AvatarFigure = styled.figure`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const NicknameAndDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Content = styled.p`
  background-color: gray;
  border-radius: 12px;
  padding: 12px;
  margin-left: 62px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
