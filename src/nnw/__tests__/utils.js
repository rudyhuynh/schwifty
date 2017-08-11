import * as utils from '../utils'

test('dotProduct', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [3, 2, 1]

    const dotProduct = utils.dotProduct(arr1, arr2)
    expect(dotProduct).toBe(10)
})