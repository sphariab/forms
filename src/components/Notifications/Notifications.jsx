import React from 'react'
import styled from 'styleguide/styled';
import Icon from 'components/Icon';

const Wrapper = styled.div`
  @media (min-width: 320px) {
    background: #F8F8F8;
    border-radius: 3px;
    padding: 12px 12px 12px 9px;
    box-sizing: border-box;
    margin-bottom: 4px;
  }
`;

const WrapperContainer = styled.div`
  @media (min-width: 320px) {
    width: 100%;
    height: 391px;
    background: $white;
    box-shadow: 0px 18px 50px rgba(0, 0, 0, 0.16);
    border-radius: 3px;
    padding: 24px 17px;
    position: relative;
    box-sizing: border-box;
  }
  @media (min-width: 1024px) {
    width: 300px;
  }
`;

const Text = styled.span`
  @media (min-width: 320px) {
    font-family: 'Inter-Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 4px;
  }
`;

const TextBlack = styled.div`
  @media (min-width: 320px) {
    color: #000000;
  }
`;

const TextRed = styled.span`
  @media (min-width: 320px) {
   color: #DF1721;
  }
`;

const TextGrey = styled.div`
  @media (min-width: 320px) {
    color: #8B8B8B;
    line-height: 18px;
  }
`;

const ShowLink = styled.div`
  @media (min-width: 320px) {
    position: absolute;
    font-family: 'Inter-Regular';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    bottom: 24px;
    width: calc(100% - 34px);
    text-align: center;
    cursor: pointer;
    color: #000000
  }
`;

const IconUserIcon = styled.div`
  @media (min-width: 320px) {
  & > svg {
      border-radius: 50%;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
`;

const Notifications = () => {
  return (
    <WrapperContainer>
      <Wrapper>
        <Text>
          <TextBlack>
            Effective Date has changed from <br/> 04/08/2019 to 04/10/2019
            <TextRed> New</TextRed>
          </TextBlack>
        </Text>
        <Text>
          <TextGrey>Non-residential building </TextGrey>
          <TextGrey>
            <IconUserIcon>
              <Icon name="user-icon" />05/14/2019
            </IconUserIcon>
          </TextGrey>
        </Text>
      </Wrapper>
      <Wrapper>
        <Text>
          <TextBlack>
            Effective Date has changed from <br/> 04/08/2019 to 04/10/2019
            <TextRed> New</TextRed>
          </TextBlack>
        </Text>
        <Text>
          <TextGrey>Non-residential building </TextGrey>
          <TextGrey>
            <IconUserIcon>
              <Icon name="user-icon" />05/14/2019
            </IconUserIcon>
          </TextGrey>
        </Text>
      </Wrapper>
      <Wrapper>
        <Text>
          <TextBlack>
            Effective Date has changed from <br/> 04/08/2019 to 04/10/2019
            <TextRed> New</TextRed>
          </TextBlack>
        </Text>
        <Text>
          <TextGrey>Non-residential building </TextGrey>
          <TextGrey>
            <IconUserIcon>
              <Icon name="user-icon" />05/14/2019
            </IconUserIcon>
          </TextGrey>
        </Text>
      </Wrapper>
      <ShowLink>Show more
        <Text> (12)</Text>
      </ShowLink>
    </WrapperContainer>
  )
}

export default Notifications
