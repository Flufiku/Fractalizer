let Iterations = 3;
let DropdownType = 0;

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

draw_fractal();

window.addEventListener('resize', draw_fractal);

function livelyPropertyListener(name, val)
{
    //write name and val on the canvas
    ctx.font = "30px Arial";
    ctx.fillText(name + ": " + val, 10, 50);
    
    switch(name) {
        case "DropdownType":
            DropdownType = val;
            break;
        case "SliderIterations":
            Iterations = val;
            break;
    }

    draw_fractal();
}

function resizeCanvas(canvas, ctx) {
    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;

    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    ctx.scale(devicePixelRatio, devicePixelRatio);
}

async function draw_fractal()
{
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    resizeCanvas(canvas, ctx);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (DropdownType == 0) {
        const module = await import('./Backgrounds/sierpinski_triangle/main.js');
        module.draw(ctx, Iterations);
    }

    else if (DropdownType == 1) {
        const module = await import('./Backgrounds/sierpinski_carpet/main.js');
        module.draw(ctx, Iterations);
    }
}
