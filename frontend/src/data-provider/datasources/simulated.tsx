import { DataPayload } from "../types"

export const simulated: () => DataPayload = () => {
    return {
        timestamp: 0,
        speed: 1,
        acceleration: 2
    };
}