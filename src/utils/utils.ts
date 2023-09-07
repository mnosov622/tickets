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

export const getTransfersDeclension = (stops: number) => {
  if (stops === 1) {
    return "пересадка";
  } else if (stops >= 2 && stops <= 4) {
    return "пересадки";
  } else {
    return "пересадок";
  }
};
