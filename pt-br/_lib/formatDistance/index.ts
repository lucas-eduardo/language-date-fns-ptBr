type FormatDistanceLocales =
  | 'lessThanXSeconds'
  | 'xSeconds'
  | 'halfAMinute'
  | 'lessThanXMinutes'
  | 'xMinutes'
  | 'aboutXHours'
  | 'xHours'
  | 'xDays'
  | 'aboutXWeeks'
  | 'xWeeks'
  | 'aboutXMonths'
  | 'xMonths'
  | 'aboutXYears'
  | 'xYears'
  | 'overXYears'
  | 'almostXYears';

interface IFormatDistanceLocale {
  [key: string]:
    | string
    | {
        one: string;
        other: string;
      };
}

const formatDistanceLocale: IFormatDistanceLocale = {
  lessThanXSeconds: {
    one: 'menos de um segundo',
    other: 'menos de {{count}} segundos',
  },

  xSeconds: {
    one: '1 segundo',
    other: '{{count}} segundos',
  },

  halfAMinute: 'meio minuto',

  lessThanXMinutes: {
    one: 'menos de um minuto',
    other: 'menos de {{count}} minutos',
  },

  xMinutes: {
    one: '1 minuto',
    other: '{{count}} minutos',
  },

  aboutXHours: {
    one: 'cerca de 1 hora',
    other: 'cerca de {{count}} horas',
  },

  xHours: {
    one: '1 hora',
    other: '{{count}} horas',
  },

  xDays: {
    one: '1 dia',
    other: '{{count}} dias',
  },

  aboutXWeeks: {
    one: 'cerca de 1 mês',
    other: 'cerca de {{count}} meses',
  },

  xWeeks: {
    one: '1 mês',
    other: '{{count}} meses',
  },

  aboutXMonths: {
    one: 'cerca de 1 mês',
    other: 'cerca de {{count}} meses',
  },

  xMonths: {
    one: '1 mês',
    other: '{{count}} meses',
  },

  aboutXYears: {
    one: 'cerca de 1 ano',
    other: 'cerca de {{count}} anos',
  },

  xYears: {
    one: '1 ano',
    other: '{{count}} anos',
  },

  overXYears: {
    one: 'mais de 1 ano',
    other: 'mais de {{count}} anos',
  },

  almostXYears: {
    one: 'quase 1 ano',
    other: 'quase {{count}} anos',
  },
};

export default (token: FormatDistanceLocales, count: any, options: any) => {
  options = options || {};

  let result: any | undefined;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    const item = formatDistanceLocale[token] as { one: string };
    result = item.one;
  } else {
    const item = formatDistanceLocale[token] as { other: string };
    result = item.other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'em ' + result;
    } else {
      return 'há ' + result;
    }
  }

  return result;
};
