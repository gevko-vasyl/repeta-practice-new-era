import { FaMapMarkerAlt, FaUserAlt, FaClock } from 'react-icons/fa';
import { GiDuration } from 'react-icons/gi';
import EventInfo from '../EventInfo/EventInfo';
import { formatEventStart, formatEventDuration } from '../../utils';
import { Card, Title, Chip } from './Event.styled';
// import css from './Event.module.css';

export const Event = ({ name, location, speaker, start, end, type }) => {
  const startDate = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  // console.log(css);
  // console.log(css[type]);

  return (
    <Card>
      <Title>{name}</Title>
      <EventInfo text={location}>
        <FaMapMarkerAlt size="16" />
      </EventInfo>
      <EventInfo text={speaker}>
        <FaUserAlt size="16" />
      </EventInfo>
      <EventInfo text={startDate}>
        <FaClock size="16" />
      </EventInfo>
      <EventInfo text={`Duration: ${duration}`}>
        <GiDuration size="16" />
      </EventInfo>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
};
