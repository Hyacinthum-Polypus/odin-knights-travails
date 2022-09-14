#!/usr/bin/node

const moveDiff = [
    {x:1,y:2},
    {x:2,y:1},
    {x:2,y:-1},
    {x:1,y:-2},
    {x:-1,y:-2},
    {x:-2,y:-1},
    {x:-2,y:1},
    {x:-1,y:2}
];

function Node(x, y, parent) {
    return {x, y, parent};
}

function generatePath(node, path = []) {
    if(node.parent == null) {
        path.unshift([node.x, node.y]);
        return path;
    } else {
        path.unshift([node.x, node.y]);
        generatePath(node, path);
    }
}

function knightsMoves(startingPosition, destination) {
    const queue = [Node(startingPosition[0], startingPosition[1], null)];
    while (queue.length > 1) {
        if(queue[0].x == destination[0] && queue[0].y == destination[1]) break;
        for (let index = 0; index < moveDiff.length; index++) {
            const movement = moveDiff[index];
            let newX = queue[0].x + movement.x;
            let newY = queue[0].y + movement.y;
            if(newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                queue.push(Node(newX, newY, queue[0]))
            }
        }
        queue.shift();
    }
    return generatePath(queue[0]);
}

console.log(knighhtsMoves([0,0],[1,2] == [[0,0],[1.2]]));
