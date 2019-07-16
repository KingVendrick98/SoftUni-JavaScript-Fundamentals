function solve(arr) {

    let firstCat = arr[0].split(" ");    
    let secondCat = arr[1].split(" ");

    let firstCatName = firstCat[0];
    let firstCatAge = firstCat[1];

    let secondCatName = secondCat[0];
    let secondCatAge = secondCat[1];


    
    class Cat {
        constructor(name, age) {
        this.name = name;
        this.age = age;
        }
    };
    
    let meow1 = new Cat(firstCatName, firstCatAge);
    let meow2 = new Cat(secondCatName, secondCatAge);

    console.log(`${firstCatName}, age ${firstCatAge} says Meow`);
    console.log(`${secondCatName}, age ${secondCatAge} says Meow`);
}

solve(['Mellow 2', 'Tom 5']);