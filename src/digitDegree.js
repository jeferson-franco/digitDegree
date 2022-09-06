function solution(n) {
    let count = 0;
    while (n > 9) {
        n = n
            .toString()
            .split('')
            .reduce((a, b) => parseInt(a) + parseInt(b));
        count++;
    }
    return count;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test digitDegree

// alternative solution
