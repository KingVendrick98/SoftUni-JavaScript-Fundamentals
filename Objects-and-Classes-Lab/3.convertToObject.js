function solve(jsonStr) {
     let obj = JSON.parse(jsonStr)
     let entries = Object.entries(obj)
     for (let [key, value] of entries) {
        console.log(`${key}:`, `${value}`)
     }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}')