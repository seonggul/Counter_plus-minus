import React from "react";
import { useSelector, useDispatch } from "react-redux"; //리덕스 스토어 안에 있는 값을 조회할때 사용함.
import Counter from "../components/Counter";
import { INCREMENT, DECREMENT } from "../moduls/counter";

const CounterConainer = () => {
  const counter = useSelector((state) => state.counter, []);
  const dispatch = useDispatch();
  // 두번쨰는 dependency 예를 들면 id를 넣으면 id가 변동될때마다 하는것.
  // 비어두면 처음 만들때 행해지고 다음으로 렌더를 할때마다 이 함수를 사용.
  // useSelector로 스토어에 존재하는 값 쉽게 조회 가능
  return (
    <Counter
      number={counter}
      onINCRESE={() => dispatch({ type: INCREMENT })}
      onDECRESE={() => dispatch({ type: DECREMENT })}
    />
  );
};

export default CounterConainer;
