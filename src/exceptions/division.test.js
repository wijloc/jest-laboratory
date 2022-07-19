import division from './division.js'

test('division should result the division of the first param by the second', () => {
    expect(division(4, 2)).toBe(2)
})

test('division should throw exception if the second param is zero', () => {
    //It is necessary to insert the function inside a container function
    expect(() => {division(2,0)}).toThrow(Error)
})