import { Action } from '@ngrx/store';
import { IceCream } from '../models/ice-cream';

export const ADD_FLAVOR       = '[ICECREAM] Add';
export const REMOVE_FLAVOR    = '[ICECREAM] Remove';

export class AddFlavor implements Action {
    readonly type = ADD_FLAVOR;
    constructor(public payload: IceCream) {}
}

export class RemoveFlavor implements Action {
    readonly type = REMOVE_FLAVOR;
    constructor(public payload: number) {}
}

export type Actions = AddFlavor | RemoveFlavor;
