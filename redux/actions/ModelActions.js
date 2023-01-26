import { SET_IMAGE } from "../constants";

export const addModel = (modelIndex) => ({
    type: SET_IMAGE,
    payload: modelIndex,
})
