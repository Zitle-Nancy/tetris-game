export interface IPlayer {
  pos: { x: number, y: number },
  tetromino: object,
  collided: boolean;
}