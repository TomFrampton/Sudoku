import { createTransform } from 'redux-persist';
import { Grid } from 'models';

export const TransformGrids = createTransform(
    (inboundState: any, key): any => inboundState,
    (outboundState: any, key) => outboundState && outboundState.grid ? new Grid(outboundState.grid) : outboundState
);