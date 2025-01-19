import React, { useEffect, useState } from 'react';
import Header from './component/Header';
import List from './component/List';
import './TodoList.css';

function TodoList() {
  const [list, setList] = useState([]);
  const [textId, setTextId] = useState(0);
  const [filterType, setFilterType] = useState('all');

  // 수정버튼 눌렀을 때 수정할 수 있도록 구현하기

  /////////////////////////////////////////////////////////////////////// inputText가 입력되었을 때 객체로 추가하는 로직
  const addTodo = (text) => {
    const newTodo = {
      id: textId,
      text: text,
      isDone: false,
    };
    setList([...list, newTodo]); // 새로운 할 일을 추가
    setTextId(textId + 1); // ID 증가
  };

  useEffect(() => {
    if (list.length > 0) {
      console.log(list); // 상태가 변경될 때만 출력하도록
    }
  }, [list]);
  

  /////////////////////////////////////////////////////////////////////// 완료항목,해야할일 필터링되는 로직 / button컴포넌트에서 매개변수로 done,todo값을 받아와야함
  const getFilteredList = () => {
    if (filterType === 'done') {
      return list.filter((item) => item.isDone);
    }
    if (filterType === 'todo') {
      return list.filter((item) => !item.isDone);
    }
    return list;
  };
  const filteredList = getFilteredList();
  ///////////////////////////////////////////////////////////////////////





  // X버튼 눌렀을 때 항목 삭제되게
  // li눌렀을 때 done처리 되게 >> done이 되었음을 인지하기위해 클릭 시 className=done을 추가,css부여
  // Done일 때에만 체크아이콘 보이게
  /////////////////////////////////////////////////////////////////////// isDone토글
  const toggleDone = (id) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setList(updatedList);
  };
  ///////////////////////////////////////////////////////////////////////





  /////////////////////////////////////////////////////////////////////// 완료항목 삭제로직
  const deleteList = (id) => {
    const filteredList = list.filter((item) => item.id !== id);
    setList(filteredList);
  };
  ///////////////////////////////////////////////////////////////////////





  /////////////////////////////////////////////////////////////////////// 전체삭제
  const clear = () => {
    const confirmDelete = window.confirm("모든 할일을 삭제하시겠습니까?")
    if (!confirmDelete) {
      alert("모든 할일삭제를 취소합니다.")
      return;
    } else {
      alert("모든 할일을 삭제하였습니다.")
      setList([]);
    }
  };
  ///////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="wrap">
      <Header addTodo={addTodo} />
        <List
          list={filteredList} // 필터링된 리스트 전달
          toggleDone={toggleDone}
          deleteList={deleteList}
          clear={clear}
          filterType={filterType}
          setFilterType={setFilterType}
        />
    </div>
  );
}

export default TodoList;
