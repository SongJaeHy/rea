import React,{ useState } from "react";

const Input2 = () => {
    // inputs는 이제 name, nickName, age 3개 요소에 대해서
    // 관리를 합니다.
    const[inputs, setInputs] = useState({
        name : '', // 1번 input을 담당할 name
        nickName : '', // 2번 input을 담당할 nickName
        age : '', // 3번 input을 담당할 age
    });
    console.log(inputs); // 3개의 변수가 내장
    const {name, nickName, age} = inputs; // 다시 세 개로 쪼갬
   

    // input들에 묶어서 관리하고 있으므로
    // 이벤트 하나에서 input들을 모두 관리해야함
    const onChange = (e) => {
        const {value, name} = e.target;
        console.log(e.target);
        setInputs({
            // 불변성을 지키면서 변동을 주기 위해서는
            // name이나 nick에 직접적인 값을 입력하는게 아니라
            ...inputs,// name:'', nickName:''
            [name]: value,// 내가 클릭한 name에 value매칭
        });
    }

    // 초기화버튼 누르면 input 3개의 값이 전부 사라지게해주세요.
    const onReset = () => {
            //setInputs를 이용해 name, nickName의 값을
            //초기화 시켜주세요.
            setInputs(
                {name:"", nickName:"", age:"",}
            )
    }

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/>
            <input name="nickName" placeholder="별명" onChange={onChange} value={nickName}/>
            <input name="age" placeholder="나이" onChange={onChange} value={age}/>
            <button onClick={onReset}>초기화</button>
            <br/>
            <b>값 : {name}({nickName})</b>
            <br/>
            <b>나이 : {age}</b>
        </div>
    )
}

export default Input2;
   