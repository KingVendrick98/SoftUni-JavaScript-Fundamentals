function solve(firstName, lastName, age) {
    let person = {firstName:`${firstName}`,
                lastName:`${lastName}`, 
                age:`${age}`}
    let entries = Object.entries(person);
    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`)
    }
}
solve("Peter", 
"Pan",
"20"
)