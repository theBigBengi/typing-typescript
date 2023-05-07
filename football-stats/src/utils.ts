export function dateStringToDate(dateString: string): Date {
  const dateParts = dateString
    .split("/")
    .map((dp: string): number => parseInt(dp));
  console.log(dateString);
  console.log(dateParts[2]);
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}
