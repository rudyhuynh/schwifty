// @flow

/**
 *  Input: Trained output from DigitToArrayLayer.
 *  Output: Binary represent of the number of the image.
 *  Exp: Given actual output from DigitToArrayLayer:
 *      [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.9] (this is from a image of 9)
 *      ArrayToBinaryLayer will output [1, 0, 0, 1]
 */
export default class ArrayToBinaryLayer{
    constructor(){

    }
    train(input){

    }
    action(input){
        return [0,0,0,0]
    }
}