export const formatDate = (dateStr: string) => {
  const months = [
    "янв",
    "фев",
    "мар",
    "апр",
    "май",
    "июн",
    "июл",
    "авг",
    "сен",
    "окт",
    "ноя",
    "дек",
  ];

  const dateParts = dateStr.split(".");
  const day = dateParts[0];
  const monthIndex = parseInt(dateParts[1], 10) - 1;
  const year = `20${dateParts[2]}`;
  const dayOfWeek = new Date(`${year}-${dateParts[1]}-${day}`).toLocaleDateString("ru-RU", {
    weekday: "short",
  });

  return `${day} ${months[monthIndex]} ${year}, ${dayOfWeek}`;
};
