let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.translate(canvas.width / 2, canvas.height / 2);

function drawCircle(x, y, radius) {
    ctx.strokeStyle = 'black';
    //use the arc method to draw a full circle
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    // determine the color of the circle
    ctx.fillStyle = "#4A9297";
    ctx.fill();
    // set a break condition for the loop
    if (radius > 2) {
        // recursion when the function calls itself
        // draw 2 circles side by side
        drawCircle(x + radius / 2, y, radius / 2);
        drawCircle(x - radius / 2, y, radius / 2);
    }
    ctx.stroke();
}
drawCircle(10, 10, 300);