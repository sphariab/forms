import React from 'react'
import Icon from 'components/Icon';
import styled from 'styleguide/styled';

const Wrapper = styled.div`
  margin: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  border-bottom: 1px solid #F1F1F1;
`;

const UserName = styled.div`
  font-family: 'Inter-Regular'
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const UserBlock = styled.div`
  display: flex;
`;

const UserImg = styled.div`
  background: #C4C4C4;
  border-radius: 3px;
  margin-left: 10px;
  margin-right: 8px;
  width: 24px;
  height: 24px;
`;

const HeaderIcon = styled.div`
  margin-right: 20px;
  padding: 6px;
  cursor: pointer;
  &:hover{
    background: #F8F8F8;
    border-radius: 3px;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Icon name="menu" />
      <UserBlock>
        <HeaderIcon>
          <Icon name="download"/>
        </HeaderIcon>
        <HeaderIcon>
          <Icon name="paper"/>
        </HeaderIcon>
        <HeaderIcon>
          <Icon name="notification"/>
        </HeaderIcon>
        <UserImg ></UserImg>
        <UserName>
          Maxim
          <Icon name="arrow-down"/>
        </UserName>
      </UserBlock>
    </Wrapper>
  )
}

export default Header
