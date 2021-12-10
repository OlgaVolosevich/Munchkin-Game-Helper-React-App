const newGameState = {
  players: [],
  isGameStarted: false,
  winner: null,
  warning: {
    isNeeded: false,
    value: "",
  },
};

const emptyPlayer = {
  name: "",
  gameClass: {
    first: "Нет класса",
    second: "Нет класса",
  },
  gameRace: {
    first: "Нет рассы",
    second: "Нет рассы",
  },
  gender: null,
};

export { newGameState, emptyPlayer };
