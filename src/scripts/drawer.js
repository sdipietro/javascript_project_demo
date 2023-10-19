import Particle from "./particle";

class Drawer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.mouse = {
            x: undefined,
            y: undefined
        }

        this.setupCanvas();
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        })
    }

    setupCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        // this.canvas.addEventListener('click', this.handleCanvasClick.bind(this));
        // this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
        this.animate();
    }

    drawCircle() {
        this.ctx.fillStyle = 'blue';
        // this.ctx.fillRect(10, 10, 50, 50);
        this.ctx.beginPath();
        this.ctx.arc(this.mouse.x, this.mouse.y, 20, 0, Math.PI * 2);
        this.ctx.fill();
    }

    handleCanvasClick(e) {
        this.mouse.x = e.x;
        this.mouse.y = e.y;
        this.drawCircle();
    }

    handleMouseMove(e) {
        this.mouse.x = e.x;
        this.mouse.y = e.y;
        this.drawCircle();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawCircle();
        requestAnimationFrame(this.animate.bind(this));
    }
}

export default Drawer;