import { Action, Game, computeNextGame } from ".";

test("Game is starting, X play", () => {
  // GIVEN
  const game: Game = {
    grid: [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ],
    nextPlayer: "X",
  };
  const action: Action = {
    x: 0,
    y: 0,
  };

  // WHEN
  const actual = computeNextGame(game, action);

  // THEN
  const expected: Game = {
    grid: [
      ["X", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ],
    nextPlayer: "X",
  };
  expect(actual).toEqual(expected);
});
