import styled from '@emotion/styled';

export const List = styled.div``;

export const Item = styled.div`
  padding: 4px;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.red : theme.colors.black};

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const VideoList = ({ videos, selectedVideo, onSelect }) => {
  return (
    <List>
      {videos.map(video => (
        <Item
          key={video.id}
          isSelected={selectedVideo === video.link}
          onClick={() => onSelect(video.link)}
        >
          {video.link}
        </Item>
      ))}
    </List>
  );
};
