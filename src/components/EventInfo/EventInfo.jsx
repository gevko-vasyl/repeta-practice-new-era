// import css from './EventInfo.module.css';

import { Info } from './EventInfo.styled';

const EventInfo = ({ text, children }) => {
  return (
    <Info>
      {children}
      {text}
    </Info>
  );
};

export default EventInfo;
