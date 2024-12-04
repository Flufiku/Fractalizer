let Iterations = 0;
let DropdownType = "Sierpinski Triangle";

window.addEventListener('livelyProperty', (event) => {
    const { name, value } = event.detail;

    if (name === "DropdownType") {
        DropdownType = value;
    } else if (name === "SliderIterations") {
        Iterations = value;
    }

    draw_fractal();
});

draw_fractal();

async function draw_fractal()
{
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (DropdownType == "Sierpinski Triangle") {
        const module = await import('./Backgrounds/sierpinski_triangle/main.js');
        module.draw(ctx, Iterations);

    }
}