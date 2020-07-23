type FormatRelativeLocaleTypes =
  | 'lastWeek'
  | 'yesterday'
  | 'today'
  | 'tomorrow'
  | 'nextWeek'
  | 'other';

const formatRelativeLocale = {
  lastWeek: (date: Date) => {
    const weekday = date.getUTCDay();
    const last = weekday === 0 || weekday === 6 ? 'último' : 'última';
    return "'" + last + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: 'P',
};

export default function formatRelative(
  token: FormatRelativeLocaleTypes,
  date: Date,
) {
  const format = formatRelativeLocale[token];

  if (typeof format === 'function') {
    return format(date);
  }

  return format;
}
