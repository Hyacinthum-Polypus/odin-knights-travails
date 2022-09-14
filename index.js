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
        return generatePath(node.parent, path);
    }
}

function knightMoves(startingPosition, destination) {
    if(destination[0] >= 0 && destination[0] < 8 && destination[1] >= 0 && destination[1] < 8) {
        const queue = [Node(startingPosition[0], startingPosition[1], null)];
        while (queue.length > 0) {
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

        const path = generatePath(queue[0]);
        prettyPrint(path);
        return path;
    } else {
        return undefined;
    }
}

function prettyPrint(path) {
    console.log("> knightMoves([" + path[0] + "],[" + path[path.length - 1] + "])");
    console.log("=> You made it in " + (path.length - 1) + " moves! Here's your path:")
    for (let index = 0; index < path.length; index++) {
        const element = path[index];
        console.log("  " + element);        
    }
}

knightMoves([0,0],[1,2]);
knightMoves([0,0],[3,3]);
knightMoves([3,3],[0,0]);
