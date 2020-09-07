export const INCREMENT = "counter/INCREMENT"; //액션 타입 선언
export const DECREMENT = "counter/DECREMENT";
/*
export const increment = ()=>{ type: INCREMENT}; //액션생성함수
export const decrement = ()=>{ type: DECREMENT};
*/
const initialState = 0; //초기값성정

const counter = (state = initialState, action) => {
  //리듀서 함수 정의
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
