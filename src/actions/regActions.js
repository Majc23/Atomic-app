import { types } from '../types/types';

export const updateCount = ( count ) => ({
    type: types.updateCount,
    payload: count
});

export const activeDate1 = ( name, apellidos ) => ({
    type: types.activeDate1,
    payload: {
        name,
        apellidos
    }
});

export const removeError = () => ({
    type: types.regRemoveError
});

export const startLoading = () => ({
    type: types.regStartLoading
})
export const finishLoading = () => ({
    type: types.regFinishLoading
})