function solve(radius, height) {
    let volume = 0;
    let slantHeight = 0;
    totalSurfaceArea = 0;
    pi = 3.14159


    slantHeight = Math.sqrt((radius * radius + height * height));
    volume = ((1/3 * pi) * (radius * radius)) * height;
    totalSurfaceArea = pi * radius * (radius + Math.sqrt(radius * radius + height * height));

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
    
}
solve(3, 5)