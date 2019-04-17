import React from 'react';
//CSS
import '../css/Canvas.css';

class Canvas extends React.Component {

    componentDidMount() {
        //Create canvas
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        //Globals
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let velocityX = 10;
        let velocityY = 10;
        let rad = 30;

        function Circle(x,y) {
            this.x = x;
            this.y = y;

            this.draw = (x,y) => {
                ctx.clearRect( 0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.arc(x, y, 30, 0 , Math.PI * 2, false);
                ctx.fillStyle = 'white';
                ctx.fill();
            }
        }
        
        let circle = new Circle(200,200);

        //animate()
        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect( 0, 0, canvas.width, canvas.height);
            circle.draw();
            ctx.beginPath();
            ctx.arc(x, y, 30, 0 , Math.PI * 2, false);
            ctx.fillStyle = 'white';
            ctx.fill();
            x += velocityX;
            if( x + rad > canvas.width || x - rad < 0 ) {
                velocityX = -velocityX
            }
            if( y + rad > canvas.height || y - rad < 0 ) {
                velocityY = -velocityY
            }
            x += velocityX;
            y += velocityY;
        }
        animate();
    }

    render() {
        return (
            <canvas 
                id="canvas"
                width="3840px"
                height="2160px"
            ></canvas>
        )
    }
}

export default Canvas;