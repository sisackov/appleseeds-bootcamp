import { getInputDirection } from './input.js';

export const SNAKE_SPEED = 5; //number of times(per second) for window animation rendering
const snakeBody = [{ x: 11, y: 11 }]; //since the grid is 21x21, 11:11 is the middle of the grid
let newSegments = 0;

export function update() {
    addSegments();
    const inputDirection = getInputDirection();

    /**
     * Loops through the snakeBody array from one before the last to the first.
     * The segments are moved to the position of the segment before them.
     *
     */
    // if (snakeBody.length > 1) console.log(...snakeBody);

    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }
    // if (snakeBody.length > 1) console.log(...snakeBody);

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;

    // if (snakeBody.length > 1) {
    //     console.log(...snakeBody);
    // }
}

export function draw(gameBoard) {
    snakeBody.forEach((segment) => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });
}

export function expandSnake(amount) {
    //window.alert('snake expansion');
    newSegments += amount;
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false;
        return equalPositions(segment, position);
    });
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true });
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

/**
 * Adds new segments to the snake by dulicating
 * the last segment by the amount of new segments
 * and pushing it to the snakeBody array
 */
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }

    newSegments = 0;
}
