
    // export let value: number | [number, number];
    // export let min: number = 0;
    // export let max: number = 100;
    // export let step: number = 1;

    // const range = !(typeof value === 'number') ? true : false;
    // console.log(value)
    

    // const calcPercentage = (val: number, min: number, max: number): number => {
    //     return (val - min) / (max - min)
    // }

    // const calcValue = (percent: number, min: number, max: number): number => {
    //     return (max - min) * percent
    // }
    
    // const roundToStep = (value: number, step: number): number => {
    //     return Math.round(value/step) * step
    // }
    
    // const calcRelativeStep = (value: number, step: number, min: number, max: number): number => {
    //     return calcPercentage(roundToStep(value, step), min, max);
    // }

    // const calcTrackStep = () => 1/((max-min)/step);
    
    // let val_a = range ? calcPercentage(value[0], min, max) : 0;
    // let val_b = typeof value === 'number' ? calcPercentage(value, min, max) : calcPercentage(value[1], min, max);
    let low: number = Math.min(val_a, val_b);
    let high: number = Math.min(val_a, val_b);
    let trackFill: string = `left: ${low * 100}%; right: ${(1 - high) * 100}%;`;

export class rangeSliderMapper {
    private _value: number | [number, number];
    private _min: number;
    private _max: number;
    private _step: number;
    private _range: boolean;

    private _valueA: number;
    private _valueB: number;

    private _low: number;
    private _high: number;

    constructor(value: number | [number, number], min: number = 0, max: number = 100, step: number = 1) {
        this._value = value;
        this._min = min;
        this._max = max;
        this._step = step;
        this._range = typeof value === 'number' ? false : true;

        this._valueA = this._range ? this.calcPercentage(value[0]) : 0;
        this._valueB = typeof value === 'number' ? this.calcPercentage(value) : this.calcPercentage(value[1])
    }

    calcPercentage = (val: number): number => {
        return (val - this._min) / (this._max - this._min)
    }  

    calcRelativeStep = (value: number): number => {
        return this.calcPercentage(this.roundToStep(value));
    }

    calcTrackStep = () => 1/((this._max-this._min)/this._step);
    
    calcValue = (percent: number): number => {
        return (this._max - this._min) * percent
    }

    roundToStep = (value: number): number => {
        return Math.round(value/this._step) * this._step
    }



}