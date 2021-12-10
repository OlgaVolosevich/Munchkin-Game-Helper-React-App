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
    second: null,
  },
  gameRace: {
    first: "Нет рассы",
    second: null,
  },
  gender: null,
};

export { newGameState, emptyPlayer };
