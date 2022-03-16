export default class SliderMap {
    private _value: number | [number, number];
    private _min: number;
    private _max: number;
    private _step: number;

    private _valueA: number;
    private _valueB: number;

    constructor(value: number | [number, number], min: number = 0, max: number = 100, step: number = 1) {
        this._value = value;
        this._min = min;
        this._max = max;
        this._step = step;
        this._valueA = typeof value === 'number' 
            ? 0 
            : this.calcSteppedPercentage(this.calcPercentage(value[0])) 
        this._valueB = typeof value === 'number' 
            ? this.calcSteppedPercentage(this.calcPercentage(value)) 
            : this.calcSteppedPercentage(this.calcPercentage(value[1])) 
    }
    private get _range() { return this._max - this._min === 0 ? .0001 : this._max - this._min }

    calcSteppedPercentage(val: number) {
        return (val/this.calcTrackStep()) * this.calcTrackStep()
    }

    calcPercentage = (val: number): number => {
        return (val - this._min) / this._range
    }
    
    calcTrackStep = (): number => {
        return 1/(this._range/this._step);
    }
    
    calcValue = (percent: number): number => {
        return (this._max - this._min) * percent
    }

    roundToStep = (value: number): number => {
        return Math.round(value/this._step) * this._step
    }

    public get min(): number { return this._min }
    public set min(newMin: number) {
        const currVal = this.values;
        this._min = newMin 
        const offsetVal = currVal.map(x => {
            return this.calcSteppedPercentage(this.calcPercentage(x))
        })
        this._valueA = this.range ? offsetVal[0] : 0;
        this._valueB = offsetVal[1];
    }
    
    public get max(): number { return this._max }
    public set max(newMax: number) { 
        const currVal = this.values;
        this._max = newMax;
        const offsetVal = currVal.map(x => {
            return this.calcSteppedPercentage(this.calcPercentage(x))
        })
        this._valueA = this.range ? offsetVal[0] : 0;
        this._valueB = offsetVal[1];
    }
    
    public get step(): number { return this._step }
    public set step(newStep: number) { this._step = newStep }

    public get valueA(): number { return this._valueA }
    public set valueA(val: number) { 
        this._valueA = this.calcSteppedPercentage(val);
    }

    public get valueB(): number { return this._valueB }
    public set valueB(val: number) { 
        this._valueB = this.calcSteppedPercentage(val);
     }

    public get low(): number { 
        const min = Math.min(this._valueA, this._valueB) 
        return min > 0 ? min : 0
    }
    public get high(): number { 
        const max = Math.max(this._valueA, this._valueB) 
        return max < 1 ? max : 1
    }

    public get range() { return typeof this._value !== 'number'}

    public get trackFill(): string {
        return `left: ${this.low * 100}%; right: ${(1 - this.high) * 100}%;`;
    }

    public get value(): number {
        return  this.roundToStep(this.calcValue(this._valueB) + this.min); 
    }

    public get values(): [number, number] {
        const outputA = this.roundToStep(this.calcValue(this._valueA) + this.min);
        const outputB = this.roundToStep(this.calcValue(this._valueB) + this.min);
        const outMin = Math.min(outputA, outputB);
        const outMax = Math.max(outputA, outputB);
        return [outMin, outMax] 
    }
}