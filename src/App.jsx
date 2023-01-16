import React,{useState} from 'react';
import './App.css';

// To Do App 만들기
// 1. 인풋창이 있고 버튼이 있다.
// 2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템 추가 가능
// 3. 아이템 삭제 버튼을 누르면 삭제가 가능하다.
function App() {
  return (
    <main>
      <input type="text" onChange={(event)=>console.log(event.target.value)}/>
      <button>추가</button>
    </main>
  )
}

export default App;