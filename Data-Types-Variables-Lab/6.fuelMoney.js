function solve(distance, pasengers, oneLiterDizel) {
    let needFuel = (distance / 100) * 7;
    needFuel += pasengers * 0.100;
    let money = oneLiterDizel * needFuel;
    
    console.log(`Needed money for that trip is ${money}lv.`)
}
solve(260, 9, 2.49)