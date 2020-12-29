function createArray(){
    const arr = new Array(10);
    arr.fill(0);
    for(let i = 0; i < arr.length; i++)
    {
        arr[i] = new Array(10);
        arr[i].fill(0);
    }
    return arr;
}


function paintVerticalLines(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        arr[i][x] = 1;
        arr[i][getGreenLineMaxSize(arr, x)] = 1;
    }
}

function addGreenLine(arr, x, y) {
    for (let i = x; i <= getGreenLineMaxSize(arr, x); i++) {
        arr[y][i] = 2;
    }

}

function getGreenLineMaxSize(arr, x, greenLineDefaultSize = 3) {
    const greenLineEnd = x + greenLineDefaultSize;
    return arr.length > greenLineEnd ? greenLineEnd : arr.length;
}

const x = 4;
const y = 3;

const arr = createArray();
paintVerticalLines(arr, x);
addGreenLine(arr, x, y);

console.log(arr); //0 = empty cell, 1 = yellow cell, 2 = green cell.