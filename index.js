const canvas = document.getElementById("mycanvas");
paper.setup(canvas)

let tool = new paper.Tool();
let path;

let i = 0;

tool.onMouseDown = function (event) {
    path = new paper.Path();
    path.strokeColor = 'black';
    path.strokeWidth = 1;
    path.add(event.point);
}

tool.onMouseDrag = function (event) {
    if(i % 1 === 0){
        path.add(event.point);
    }
    i++
}

tool.onMouseUp = function () {
    console.log('saket done')
}

