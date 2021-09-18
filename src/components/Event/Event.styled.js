import styled from '@emotion/styled/macro';

export const Card = styled.div`
  position: relative;
  border: 1px dashed black;
  padding: 8px;
  border-radius: 4px;
`;

export const Title = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const calculateBgColor = ({ eventType, theme }) => {
  switch (eventType) {
    case 'free':
      return theme.colors.green;
    case 'paid':
      return theme.colors.blue;
    case 'vip':
      return theme.colors.red;
    default:
      return theme.colors.black;
  }
};

export const Chip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: ${calculateBgColor};
  color: white;
`;
