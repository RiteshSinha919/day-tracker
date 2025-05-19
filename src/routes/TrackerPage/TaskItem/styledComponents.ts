import styled from "styled-components";

export const TaskItemContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 12px 0;
`;

export const TaskItemContent = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 12px;
  padding: 0 12px;
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.grey800};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey200};
`;

export const RemoveButtonContainer = styled.div`
  width: 20%;
  margin: 0 12px;
  height: 100%;
`;
