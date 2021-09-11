import { formatDistance } from 'date-fns';
import { uk } from 'date-fns/locale';

export const formatEventDuration = (start, end) => {
  return formatDistance(Date.parse(start), Date.parse(end), {
    locale: uk,
  });
};
