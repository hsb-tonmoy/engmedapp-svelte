export const convertDate = (string_date) => {
  let date_string = new Date(string_date);
  let date = date_string.toLocaleDateString();
  let time = date_string.toLocaleTimeString();
  return `${date} - ${time}`;
};
