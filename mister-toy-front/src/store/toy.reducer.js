
export const SET_TOYS = 'SET_TOYS'
export const REMOVE_TOY = 'REMOVE_TOY'
export const UNDO_REMOVE_CAR = 'UNDO_REMOVE_CAR'
export const ADD_CAR = 'ADD_CAR'
export const UPDATE_CAR = 'UPDATE_CAR'
export const TOGGLE_CART_SHOWN = 'TOGGLE_CART_SHOWN'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    toys: [],
    lastRemovedToy: null,
    isLoading: false,
}


export function carReducer(state = initialState, action) {
    let toys
    let lastRemovedToy

    switch (action.type) {
        case SET_TOYS:
            return { ...state, toys: action.toys }
        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        case REMOVE_TOY:
            lastRemovedToy = state.toys.find(c => c._id === action.toyId)
            toys = state.toys.filter(c => c._id !== action.carId)
            return { ...state, toys, lastRemovedToy }

        case UNDO_REMOVE_CAR:
            ({ lastRemovedToy } = state)
            toys = [lastRemovedToy, ...state.toys]
            return { ...state, toys, lastRemovedToy: null }

        case ADD_CAR:
            toys = [...state.toys, action.car]
            return { ...state, toys }
        case UPDATE_CAR:
            toys = state.toys.map(car => car._id === action.car._id ? action.car : car)
            return { ...state, toys }
        default:
            return state
    }
}


