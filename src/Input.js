import React, { useState } from "react";

function Input(){
    // text 변수에 대해 상태변화 세팅(디폴트는 '')해주세요.
    const [text, setText] = useState('');

    const onChange = (e) => {
        // input 태그에 내부 글자를 text변수에 저장
        setText(e.target.value);
    }

    // button 클릭시 text 변수 내의 값이 ''가 되도록
    // 이벤트 처리를 마저 해주세요.
    const onReset = () =>{
        setText('');
    }

    return (
        <div>
            <input onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : {text}</b>
            </div>
        </div>
    );
}

export default Input;
// 리액프 컴포넌트(.js 파일 하나하나를 "컴포넌트"라고 부름)
// 는 작성되고 나서 반드시 export default 컴포넌트명;
// 을 하단에 작성해야 다른 .js 파일에서 가져다 쓸 수 있다.
