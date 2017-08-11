// @flow
import {dotProduct, sigmoid} from './utils'
import R from 'ramda'

/**
 *  Input: 28x28 pixels images
 *  This layer will be trained approach expected outputs: 
 *      [1,0,0,0,0,0,0,0,0,0] if the input image is 0
 *      [0,1,0,0,0,0,0,0,0,0] if the input image is 1
 *      [0,0,1,0,0,0,0,0,0,0] if the input image is 2
 *      [0,0,0,1,0,0,0,0,0,0] if the input image is 3
 *      [0,0,0,0,1,0,0,0,0,0] if the input image is 4
 *      [0,0,0,0,0,1,0,0,0,0] if the input image is 5
 *      [0,0,0,0,0,0,1,0,0,0] if the input image is 6
 *      [0,0,0,0,0,0,0,1,0,0] if the input image is 7
 *      [0,0,0,0,0,0,0,0,1,0] if the input image is 8
 *      [0,0,0,0,0,0,0,0,0,1] if the input image is 9
 */
export default class ImageToArrayLayer{
    static HIDDEN_SIZE = 15;

    hidden: Array<Array>;
    output: Array<Array>;

    accumulatedGradient: number

    constructor(){
        hidden = Array.from({length: ImageToArrayLayer.HIDDEN_SIZE})
            .map(() => {
                return [...Array.from({length: 29}).map(() => Math.random())]
            })
    }
    getNormalizedImage(arr: Array){
        return arr.map(item => item/255)
    }
    train(allImages, allExpectations){

    }
    /**
     *  Cost function
     *  C(w, b) = 1/(2n) * Sigma[each output]( actual - expected )^2
     *  C'(wi) = 1/n * Sigma[each input] (( actual - expected ) * actual'(w1))
     *      = 1/n * Sigma[each input] (( actual - expected ) * input[i] )
     *  w := w - nuy * grad C(w) 
     */
    trainEach(arr28x28: Array, expected: Array){
        const actual = this.hidden.map(R.pipe(dotProduct([...arr28x28, 1]), sigmoid))
        return 1/ImageToArrayLayer * (actual - expected)
    }

    action(arr28x28){
        return this.hidden.map(R.pipe(dotProduct([...arr28x28, 1]), sigmoid))
    }

    nuy(){
        return 0.01
    }
}