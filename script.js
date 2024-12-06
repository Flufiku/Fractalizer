let Iterations = 2;
let DropdownType = "Sierpinski Carpet";

draw_fractal();


window.addEventListener('livelyProperty', (event) => {
    const { name, value } = event.detail;

    if (name === "DropdownType") {
        DropdownType = value;
    } else if (name === "SliderIterations") {
        Iterations = value;
    }

    draw_fractal();
});

window.addEventListener('resize', draw_fractal);


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

    if (DropdownType == "Sierpinski Triangle") {
        const module = await import('./Backgrounds/sierpinski_triangle/main.js');
        module.draw(ctx, Iterations);
    }

    else if (DropdownType == "Sierpinski Carpet") {
        const module = await import('./Backgrounds/sierpinski_carpet/main.js');
        module.draw(ctx, Iterations);
    }
}
