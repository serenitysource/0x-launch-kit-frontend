export interface Cord {
    x: number;
    y: number;
}
export enum OrderSide {
    Bid,
    Ask,
}

export interface Margin {
    left: number;
    right: number;
    top: number;
    bottom: number;
}

export interface ChartDimensions {
    width: number;
    height: number;
    margin: Margin;
}
