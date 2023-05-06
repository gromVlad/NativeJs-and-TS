export const sum = (salary:number,bonus:number) => salary + bonus

export const sub = (salary:number,bonus:number) => salary - bonus

//create reduser
export type ActionType = {
  type:"SUM" | "TEST" | "SUB" 
  playBox:{
    n:number
  }
}

export type StateType = number

// one el_1 -> state,el_2 action -> objects
export const salaryReduser = (state:StateType, action:ActionType) => {
  switch (action.type) {
    case "SUM":
      return state + action.playBox.n
    case "SUB":
      return state - action.playBox.n
    default:
      return state
  }
}
