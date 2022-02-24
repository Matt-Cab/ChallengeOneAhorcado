const styles = getComputedStyle(document.documentElement);
const mainColor = styles.getPropertyValue('--dark-blue');

const drawing = document.querySelector("#drawing");
const brush = drawing.getContext("2d");
brush.strokeStyle = mainColor;
brush.lineWidth = 3;
const drawingMiddlePointX = drawing.width / 2;
const drawingHeight = drawing.height - 2;

const letters = document.querySelector("#letters");
const cursor = letters.getContext("2d");

function writeText(text, posX, posY, fontSize) {
    cursor.font = `${fontSize}px consolas`;
    cursor.fillStyle = mainColor;
    cursor.textAlign = "center";
    cursor.fillText(text, posX, posY);
}

function drawNextPart(tries) {
    brush.beginPath();

    switch (tries) {
        case 0:
            brush.moveTo(drawingMiddlePointX - 70, drawingHeight);
            brush.lineTo(drawingMiddlePointX + 70, drawingHeight);
            break;
        case 1:
            brush.moveTo(drawingMiddlePointX, drawingHeight);
            brush.lineTo(drawingMiddlePointX, 0);
            break;
        case 2:
            brush.moveTo(drawingMiddlePointX, 2);
            brush.lineTo(drawingMiddlePointX + 100, 4);
            break;
        case 3:
            brush.moveTo(drawingMiddlePointX + 100, 2);
            brush.lineTo(drawingMiddlePointX + 100, 65);
            break;
        case 4:
            brush.arc(drawingMiddlePointX + 100, 95, 30, 0, Math.PI * 2);
            break;
        case 5:
            brush.moveTo(drawingMiddlePointX + 100, 125);
            brush.lineTo(drawingMiddlePointX + 100, 285);
            break;
        case 6:
            brush.moveTo(drawingMiddlePointX + 100, 135);
            brush.lineTo(drawingMiddlePointX + 50, 200);
            brush.moveTo(drawingMiddlePointX + 100, 135);
            brush.lineTo(drawingMiddlePointX + 150, 200);
            break;
        case 7:
            brush.moveTo(drawingMiddlePointX + 100, 285);
            brush.lineTo(drawingMiddlePointX + 50, 350);
            brush.moveTo(drawingMiddlePointX + 100, 285);
            brush.lineTo(drawingMiddlePointX + 150, 350);
            break;
        default:
            break;
    }
    brush.stroke();
}

function cleanCanvas(element) {
    const context = element.getContext("2d");

    context.clearRect(0, 0, element.width, element.height);
}

function cleanGameCanvas() {
    cleanCanvas(drawing);
    cleanCanvas(letters);
}