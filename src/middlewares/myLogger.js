const myLogger = store => next => action => {
  console.log(action); // 먼저 액션을 출력한다.
  const result = next(action); // 다음 미들웨어 (또는 리듀서) 에게 액션을 전달한다.

  // 업데이트 이후의 상태를 조회한다.
  console.log('\t', store.getState());
  
  return result;
}

export default myLogger;