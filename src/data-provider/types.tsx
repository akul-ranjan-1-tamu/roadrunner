export enum DATASOURCE {SIM};

export interface DataPayload {
    timestamp: number,
    speed?: number,
    acceleration?: number
}