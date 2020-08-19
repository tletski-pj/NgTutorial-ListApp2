import { IceCream } from '../models/ice-cream';
import * as FlavorActions from '../actions/ice-cream-actions';


const initialState: IceCream = {
    flavor: 'Vanilla',
    maker: 'Honey Hut'
};


export function iceCreamReducer(state: IceCream[] = [initialState], action: FlavorActions.Actions) {

    switch (action.type) {
        case FlavorActions.ADD_FLAVOR:
            return [...state, action.payload];
        case FlavorActions.REMOVE_FLAVOR:
            const id = action.payload;
            return state.filter((tutorial, index , stateArray) => (index !== id));
        default:
            return state;
    }
}

