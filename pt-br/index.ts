import formatDistance from './_lib/formatDistance';
import formatLong from './_lib/formatLong';
import formatRelative from './_lib/formatRelative';
import localize from './_lib/localize';
import match from './_lib/match';

const locale: Locale = {
  code: 'pt-BR',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

export default locale;
