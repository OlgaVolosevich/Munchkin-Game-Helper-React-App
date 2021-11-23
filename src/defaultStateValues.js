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
    gameClass: "Нет класса",
    gameRace: "Нет рассы",
    gender: null,
  };

export {newGameState, emptyPlayer};