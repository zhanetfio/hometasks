const initState = {
    themeId: 1,
}
type ThemeStateType={
    themeId:number
}
type ChangeThemeIdType={
    type: 'SET_THEME_ID'
    id:number
}
type ActionType=ChangeThemeIdType

export const themeReducer = (state = initState, action: ActionType): ThemeStateType => {
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state,themeId:action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number):ChangeThemeIdType => ({ type: 'SET_THEME_ID', id })
