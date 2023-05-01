import { ActionType, StateType, salaryReduser, sub, sum } from "./lesson_7"

//name test
test('sum salary',()=> {
  //test data init
  const salary:number = 900
  const bonus:number = 2000

  //test fun
  const result = sum(salary,bonus)

  expect(result).toBe(2900)
})

//name test
test('sum salary',()=> {
  expect(sub(900,200)).toBe(700)
})

//name test
test('test sum reduser',()=> {
  //test data init
  const state:StateType = 900
  const action: ActionType = {
    type: "SUM",
    playBox: {
      n: 12,
    },
  };
  //test fun
  const a = salaryReduser(state,action)

  expect(a).toBe(912)
})

