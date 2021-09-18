import styled from '@emotion/styled/macro';

export const Info = styled.p`
  display: flex;
  align-items: center;

  margin-top: 0;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.primaryText};

  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;
  text-transform: capitalize;

  & svg {
    display: block;
    margin-right: 8px;
    color: ${props => props.theme.colors.secondaryText};
  }
`;
