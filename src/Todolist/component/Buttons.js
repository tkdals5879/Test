import React from 'react';

function Buttons({ setFilterType, clear }) {

  // 부모 컴포넌트로 filterTyper값을 전달해줘야하므로 매개변수로 담아서 보내줘야함 > onclick했을 때 실행함수의 매개변수로 값을 넣어주자

  return (
    <div className="btnWrap">
      <button type="button" onClick={() => setFilterType('all')}>
        전체보기
      </button>
      <div className="btnbtn">
        <button type="button" onClick={() => setFilterType('done')}>
          완료항목
        </button>
        <button type="button" onClick={() => setFilterType('todo')}>
          해야 할 일
        </button>
      </div>
      <button type="button" className="alldelete" onClick={clear}>
        전체삭제
      </button>
    </div>
  );
}

export default Buttons;
