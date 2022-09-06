const solution = require('./digitDegree.js');

test('test 1', () => {
    expect(solution(5)).toBe(0);
});

test('test 2', () => {
    expect(solution(100)).toBe(1);
});

test('test 3', () => {
    expect(solution(91)).toBe(2);
});

test('test 4', () => {
    expect(solution(99)).toBe(2);
});

test('test 5', () => {
    expect(solution(1000000000)).toBe(1);
});

test('test 6', () => {
    expect(solution(9)).toBe(0);
});

test('test 7', () => {
    expect(solution(73)).toBe(2);
});

test('test 8', () => {
    expect(solution(877)).toBe(2);
});

test('test 9', () => {
    expect(solution(777773)).toBe(3);
});

test('test 10', () => {
    expect(solution(304)).toBe(1);
});
