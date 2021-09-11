import css from './EventInfo.module.css';

const EventInfo = ({ text, children }) => {
  return (
    <p className={css.info}>
      {children}
      {text}
    </p>
  );
};

export default EventInfo;
