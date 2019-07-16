function solve(input) {
    let result = {}

    input.forEach(elem => {
        let [company, id] = elem.split(' -> ')

        if (!(company in result)) {
            result[company] = [];
            result[company].push(id);
        } else {
            if (!result[company].includes(id)) {
                result[company].push(id);
            }
        }
    });
    result = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]))
    result.forEach(el => {
        console.log(`${el[0]}\n-- ${el[1].join(`\n-- `)}`)
    })
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )