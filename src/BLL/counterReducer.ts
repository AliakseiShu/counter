type CounterInitStateType = typeof initState

const initState = {
    counter: 0,
    valueInputMax: 0,
    valueInputStart: 0,
    edit: " "
}

type IncreaseValueActionType = {
    type: "INCREASE-VALUE"
}
type ResetStartValueActionType = {
    type: "RESET-VALUE-START"
}
type SetStartValueActionType = {
    type: "SET-START-VALUE",
    valueInputStart: number
}
type SetMaxValueActionType = {
    type: "SET-MAX-VALUE",
    valueInputMax: number
}

type EditValueActionType = {
    type: "EDIT-VALUE",
    message: string
}

type ActionType = IncreaseValueActionType
    | ResetStartValueActionType
    | SetStartValueActionType
    | SetMaxValueActionType
    | EditValueActionType

export const counterReducer = (state: CounterInitStateType = initState, action: ActionType): CounterInitStateType => {
    switch (action.type) {
        case "INCREASE-VALUE":
            return {...state, counter: state.counter + 1}
        case "RESET-VALUE-START":
            return {...state, counter: state.valueInputStart}
        case "SET-START-VALUE":
            return {...state, valueInputStart: action.valueInputStart}
        case "SET-MAX-VALUE":
            return {...state, valueInputMax: action.valueInputMax}
        case "EDIT-VALUE":
            return {...state, edit: action.message}
        default :
            return state
    }
}
export const increaseValueAC = (): IncreaseValueActionType => ({type: "INCREASE-VALUE"})
export const resetStartValueAC = (): ResetStartValueActionType => ({type: "RESET-VALUE-START"})
export const setStartValueAC = (valueInputStart: number): SetStartValueActionType => ({
    type: "SET-START-VALUE",
    valueInputStart
})
export const setMaxValueAC = (valueInputMax: number): SetMaxValueActionType => ({type: "SET-MAX-VALUE", valueInputMax})
export const editValueAC = (message: string): EditValueActionType => ({type: "EDIT-VALUE", message})

