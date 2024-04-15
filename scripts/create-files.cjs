const {writeFileSync} = require('node:fs');

const template = `import {expect, test} from 'vitest';

function sum(a, b) {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

`;


for (let i = 0; i < Number.parseInt(process.argv[2]); i++) {
    writeFileSync(`exp-${i}.test.js`, template);
}