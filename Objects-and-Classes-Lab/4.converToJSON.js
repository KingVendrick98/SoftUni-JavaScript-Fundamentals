function solve(name, lastName, hairColor) {
     let obj = {name:`${name}`, lastName:`${lastName}`, hairColor:`${hairColor}`}
     
     console.log(JSON.stringify(obj))
}
solve('George',
'Jones',
'Brown'
)