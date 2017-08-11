// @flow

import R from 'ramda'

export const dotProduct = R.curry((arr1, arr2) => {
    return arr1.map((value, i) => value*arr2[i])
        .reduce((acc, val) => acc+val, 0)
})

export const sigmoid = z => {
    return 1 / (1 + Math.exp(-z))
}