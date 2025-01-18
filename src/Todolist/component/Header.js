import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


function Header({ addTodo }) {

  const [inputText, setInputText] = useState('');

  const inputValue = (e) => {
    setInputText(e.target.value)
  }

  const add = () => {
    if (inputText.trim() === ''){
      alert("할일을 입력해주세요!")
      return;
    }
      addTodo(inputText)
      setInputText('');
  }

  const enterKeyUpAdd = (e) => {
    if(e.key === "Enter"){
      add();
    }
  }

  return (
    <div className='headerWrap'>
      <h1>Todo List</h1>

      <div className='inputWrap'>
        <input
          type="text"
          placeholder='add your tasks!'
          value={inputText}
          onChange={inputValue}
          onKeyUp={enterKeyUpAdd}
        />
        <button type='button' onClick={() => add()}><FontAwesomeIcon icon={faPlus} /></button>
      </div>
    </div>
  )
}

export default Header;
