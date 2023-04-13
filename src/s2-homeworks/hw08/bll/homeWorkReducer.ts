import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }



export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const copyState=[...state]
            const newState=copyState.sort((a,b)=>{
                if(a.name>b.name){
                    return 1
                }else if(a.name<b.name){
                    return -1
                }
                return 0
            })
            return action.payload ==="up" ? newState:newState.reverse()
        }

        case 'check': {
            const copyState=[...state]
            const newState= copyState.filter(a=>a.age>=action.payload)
            return newState
        }
        default:
            return state
    }
}
