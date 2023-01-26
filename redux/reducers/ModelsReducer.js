import { SET_IMAGE } from "../constants";
import placeholder from '../../assets/profilePhoto.jpg'
import placeholder1 from '../../assets/profilePhoto1.jpg';
import placeholder2 from '../../assets/profilePhoto2.jpg';
import placeholder3 from '../../assets/profilePhoto3.jpg';
import placeholder4 from '../../assets/profilePhoto4.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';
const image = async () => {
    await AsyncStorage.getItem('mainImage');
}

const INITIAL_STATE = {
    current: [placeholder1],
    possible: [placeholder, placeholder1, placeholder2, placeholder3, placeholder4],
    selectedImage: null
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SET_IMAGE:
            return {...state, selectedImage: action.payload}

        default:
            return state;
    }
};
