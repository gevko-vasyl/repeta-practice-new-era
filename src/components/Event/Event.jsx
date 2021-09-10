import css from './Event.module.css';

export const Event = ({ name, location, speaker, start, end }) => {
  return (
    <div className={css.event}>
      <h2>{name}</h2>
      <p>{location}</p>
      <p>{speaker}</p>
      <p>{start}</p>
      <p>Duration</p>
    </div>
  );
};
