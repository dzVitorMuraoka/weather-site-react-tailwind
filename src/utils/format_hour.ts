export function formatHour(isoDateString: string) {
    const date = new Date(isoDateString);
    const localHour = date.getHours();
    return `${localHour}h`;
  }

export function convertHourStringIntoNumber(hourString: string): number{
  const parts = hourString.split('h');
  const hour = parseInt(parts[0], 10)
  return hour;
}