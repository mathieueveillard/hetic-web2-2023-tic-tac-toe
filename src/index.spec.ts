import { Action, Game, computeNextGame } from ".";

test("Start of the game", () => {
  // GIVEN
  const game: Game = {
    grid: [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ],
    nextPlayer: "X",
  };
  const action: Action = {
    player: "X",
    coordinates: {
      x: 0,
      y: 0,
    },
  };

  // WHEN
  const actual = computeNextGame(game, action);

  // THEN
  const expected: Game = {
    grid: [
      ["X", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ],
    nextPlayer: "O",
  };
  expect(actual).toEqual(expected);
});
