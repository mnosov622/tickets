export const getTransfersDeclension = (stops: number) => {
  if (stops === 1) {
    return "пересадка";
  } else if (stops >= 2 && stops <= 4) {
    return "пересадки";
  } else {
    return "пересадок";
  }
};
