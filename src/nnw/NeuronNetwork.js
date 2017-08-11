import ImageToArrayLayer from './ImageToArrayLayer'
import ArrayToBinaryLayer from './ArrayToBinaryLayer'

// @flow
export default class NeuronNetwork{
    imageToArrayLayer: ImageToArrayLayer;
    arrayToBinaryLayer: ArrayToBinaryLayer;

    constructor(){
        this.imageToArrayLayer = new ImageToArrayLayer()
        this.arrayToBinaryLayer = new ArrayToBinaryLayer()
    }

    trainImageToArrayLayer(){
        
    }

    trainArrayToBinaryLayer(){

    }
}