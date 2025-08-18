export function formatWeekday(dailyForecast: string) {
  const portugueseWeekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const date = new Date(dailyForecast);
  const weekdayName = portugueseWeekdays[date.getUTCDay()];

  return weekdayName;
}
