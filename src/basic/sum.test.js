import sum from './sum.js'

test('sum should return the sum of two params', () => {
    expect(sum(1,2)).toBe(3)
})