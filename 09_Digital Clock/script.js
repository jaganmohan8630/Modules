function clock(){
    const now = new Date();
    let hours = now.getHours().toString().padStart(2,0);
    const meridian = hours>=12?"PM":"AM";
    hours = hours %12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const time = `${hours}:${minutes}:${seconds} ${meridian}`;
    document.getElementById("clock").textContent = time;
}
clock();
setInterval(clock,1000)

// // out of 30
// Maths       : 29 
// Chemistry   : 30
// English     : 29
// BEEE        : 28

// // out of 50
// ED & BLENDER   : 48
// Chemistry Lab  : 48
// English Lab    : 47
// Python Lab     : 45