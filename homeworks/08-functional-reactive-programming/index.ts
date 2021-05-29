import './style.css';
import { BehaviorSubject, fromEvent, interval, Observable } from 'rxjs';
import {
  map,
  mergeMap,
  tap,
  withLatestFrom,
  throttleTime,
  delay
} from 'rxjs/operators';

interface Block {
  x: number;
  y: number;
  width: number;
  height: number;
}

function getRandomInt(max: number):number {
  return Math.floor(Math.random() * max);
}
const catRender = (block: Block):void => {
  ctx.fillStyle = 'yellow';
  ctx.fillRect(block.x, block.y, block.width, block.height);
};

const gameArea: HTMLElement = document.getElementById('game');
const ctx: CanvasRenderingContext2D = (<HTMLCanvasElement>gameArea).getContext(
  '2d'
);
const score: HTMLElement = document.getElementById('score');

const colide = ([clickXY, catXY]):void => {
  console.log(clickXY)
  return (
    clickXY.x >= catXY.x &&
    clickXY.x <= catXY.x + catXY.width &&
    clickXY.y >= catXY.y &&
    clickXY.y <= catXY.y + catXY.height &&
    scoreInc()
  );
};

let cats = 0;

function scoreInc():void {
  score.innerText = `score ${(cats += 1)}`;
};

const render = (blocks: Block[]):void => {
  ctx.clearRect(0, 0, gameArea.clientWidth, gameArea.clientHeight);
  blocks.forEach(b => {
    ctx.fillStyle = 'black';
    ctx.fillRect(b.x, b.y, b.width, b.height);
  });
};

const field$ = new BehaviorSubject([
  { x: 10, y: 10, height: 50, width: 50 },
  { x: 80, y: 10, height: 50, width: 50 },
  { x: 150, y: 10, height: 50, width: 50 },
  { x: 10, y: 80, height: 50, width: 50 },
  { x: 80, y: 80, height: 50, width: 50 },
  { x: 150, y: 80, height: 50, width: 50 },
  { x: 10, y: 150, height: 50, width: 50 },
  { x: 80, y: 150, height: 50, width: 50 },
  { x: 150, y: 150, height: 50, width: 50 }
])

const catch$ = fromEvent<MouseEvent>(gameArea, 'click').pipe(
  map(event => ({
    x: event.offsetX,
    y: event.offsetY
  })),
  throttleTime(500)
);

const update$ = interval(1000).pipe(
  mergeMap( _ => field$),
  tap(render),
  map(blocks => blocks[getRandomInt(blocks.length)]),
  delay(150),
  tap(catRender)
);

catch$
  .pipe(
    withLatestFrom(update$),
    tap(colide)
  )
  .subscribe();
