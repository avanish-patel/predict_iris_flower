// Data class for train
export class SVCParameters {
    C: number = 2.0;
}

export class SVCResult {
    accuracy: number;
}

// Data class for prediction
export class Iris {
    sepalLength: number = 5.0;
    sepalWidth: number = 3.5;
    petalLength: number = 2.5;
    petalWidth: number = 1.2;
}

export class Prediction{
    name: string;
    value: number;
}