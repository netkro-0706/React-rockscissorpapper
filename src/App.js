import { logRoles } from '@testing-library/react';
import {useState} from 'react'
import './App.css';
import Box from './component/Box'

//1.박스 2개 (타이틀, 사진정보, 결과)
//2.가위 바위 보 버튼이 있다.
//3.버튼을 클릭하면 클릭한 값이 박스에 보인다.
//4.컴퓨터는 랜덤으로 아이템 선택이 된다.
//5. 3 4의 결과를 가지고 승패를 보인다.
//6. 승패 결과에 따라 테두리 색이 바뀜 - 초 빨 검


const choice = {
  rock : {
    name: "Rock",
    img: "http://gdimg.gmarket.co.kr/463580244/still/600?ver=1631615157"
  },
  scissors:{
    name: "Scissors",
    img: "https://www.amway.co.kr/_ui/responsive/theme-blue/images/akl_product/home-living/visual_top_5037.png"
  },
  paper:{
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZHQm1z0pka3yGO3PoVeXnztGK08CcOU9Rw&usqp=CAU"
  }
}

function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement=(user, computer)=>{
    console.log("user : ", user.name, computer.name);
    if(user.name == computer.name){
      return "tie";
    }else if(user.name=="Rock") return computer.name=="Scissors" ? "win" : "lose";
    else if(user.name=="Scissors") return computer.name=="Paper" ? "win" : "lose";
    else if(user.name=="Paper") return computer.name=="Rock" ? "win" : "lose";
  }
    

  const randomChoice=()=>{
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <div>
      <div className="main">
        <Box title="YOU" item={userSelect} result={result}/>
        <Box title="COMPUTER" item={computerSelect} result={result}/>
      </div>
      <div className="main">
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
