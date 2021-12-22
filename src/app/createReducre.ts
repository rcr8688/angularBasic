import { createReducer, on } from '@ngrx/store'
import { Increment, Decrement, Reset } from './createActions'

export const initialValue = 0

const _couterReducre = createReducer(
    initialValue,
    on(Increment, (state) => state + 1),
    on(Decrement, (state) => state - 1),
    on(Reset, (state) => state = 0),

)

export function counterReducer(state: any, action: any) {
    return _couterReducre(state, action)
}

