import React, { useEffect, useMemo, useState } from "react";
import "./App.css"
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";
function App() {
  const[username,setUsername]=useState(null);
  const[questionNumber,setQuestionNumber]=useState(1)
  const [stop, setStop] = useState(false);
  const[earned,setEarned]=useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: " Which among the following was the first Indian woman who went into space?",
      answers: [
        {
          text: " Kalpana Chawla",
         
          correct: true,
        },
        {
          text: " Sunita Williams",
          correct: false,
        },
        {
          text: " Koneru Humpy",
          correct: false,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who was the first Indian to go to space?",
      answers: [
        {
          text: " Vikram Ambalal",
          correct: false,
        },
        {
          text: "Ravish Malhotra",
          correct: false,
        },
        {
          text: "Rakesh Sharma",
          correct: true,
        },
        {
          text: " Nagapathi Bhat",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: " Who among the following was the first man to climb Mount Everest without supplemental oxygen?",
      answers: [
        {
          text: "Junko Tabei",
          correct: false,
        },
        {
          text: " Reinhold Messner",
          correct: false,
        },
        {
          text: "Duncan Chessell",
          correct: false,
        },
        {
          text: "Phu Dorji",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "Who built the Jama Masjid?",
      answers: [
        {
          text: "Jahangir",
          correct: false,
        },
        {
          text: " Akbar",
          correct: false,
        },
        {
          text: "Imam Bukhari",
          correct: false,
        },
        {
          text: "Shah Jahan",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: " Who wrote the Indian National Anthem?",
      answers: [
        {
          text: "Bakim Chandra Chatterji",
          correct: false,
        },
        {
          text: "Rabindranath Tagore",
          correct: true,
        },
        {
          text: " Swami Vivekanand",
          correct: false,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: " Who was the first Indian Scientist to win a Nobel Prize?",
      answers: [
        {
          text: "Amartya Sen",
          correct: false,
        },
        {
          text: " C.V Raman",
          correct: true,
        },
        {
          text: "Hargobind Khorana",
          correct: false,
        },
        {
          text: "Subramanian Chrandrashekar",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: " Who is the first Indian to win a Nobel Prize?",
      answers: [
        {
          text: " Rabindranath Tagore",
          correct:true,
        },
        {
          text: " CV Raman",
          correct: false,
        },
        {
          text: "Mother Theresa",
          correct: false,
        },
        {
          text: " Hargobind Khorana",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: " Who was the first Indian woman to win the Miss World Title?",
      answers: [
        {
          text: "Aishwarya Rai",
          correct: false,
        },
        {
          text: "Sushmita Sen",
          correct: false,
        },
        {
          text: "Reita Faria",
          correct: true,
        },
        {
          text: "Diya Mirza",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who was the first President of India?",
      answers: [
        {
          text: " Abdul Kalam",
          correct: false,
        },
        {
          text: "Lal Bahadur Shastri",
          correct: false,
        },
        {
          text: "Dr. Rajendra Prasad",
          correct: true,
        },
        {
          text: " Zakir Hussain",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Who was the first Indian to win the Booker Prize?",
      answers: [
        {
          text: " Dhan Gopal Mukerji",
          correct: false,
        },
        {
          text: "Nirad C. Chaudhuri",
          correct: false,
        },
        {
          text: " Arundhati Roy",
          correct: true,
        },
        {
          text: "Aravind Adiga",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: " Which of the following earned the name 'Flying Sikh'?",
      answers: [
        {
          text: "Milkha Singh",
          correct: true,
        },
        {
          text: "Lala Lajpat Rai",
          correct: false,
        },
        {
          text: "Bhagat Singh",
          correct: false,
        },
        {
          text: "Sardar Vallabhbhai Patel",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: " Which of the following is the capital of Arunachal Pradesh?",
      answers: [
        {
          text: "Itanagar",
          correct: true,
        },
        {
          text: "Dispur",
          correct: true,
        },
        {
          text: "Imphal",
          correct: false,
        },
        {
          text: "Panaji",
          correct: false,
        },
      ],
    },
  ];

 

  const moneyStack=useMemo(()=>
    [
      {id:1,amount:"$100"},
      {id:2,amount:"$200"},
      {id:3,amount:"$300"},
      {id:4,amount:"$400"},
      {id:5,amount:"$500"},
      {id:6,amount:"$600"},
      {id:7,amount:"$700"},
      {id:8,amount:"$800"},
      {id:9,amount:"$900"},
      {id:10,amount:"$1000"},
      {id:11,amount:"$1500"},
      {id:12,amount:"$2000"},
      {id:13,amount:"$3000"},
      {id:14,amount:"$4000"},
      {id:15,amount:"$5000"}
    ].reverse(),

  []);
  //console.log(moneyStack.length);
  useEffect(()=>{
    questionNumber>1 && setEarned(moneyStack.find(m=>m.id === questionNumber-1).amount)
    //console.log(questionNumber);
    if(questionNumber===16) return setStop(true);
  },[moneyStack,questionNumber])
  return (
    <div className="app">
      {username?(
        <>
          <div className="main">
        {stop?<h1 className="endText">You earned:{earned}</h1>:(
        <>
        <div className="top">
          <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
        </div>
        <div className="bottom">
         <Trivia data={data} setStop={setStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>

        </div>
        </> )} 
      </div>
       
       
      
      <div className="pyramid">
        <ul className="moneyList">
          {moneyStack.map((amount)=>(
            
             <li className={questionNumber === amount.id ? "moneyListItem active" : "moneyListItem" }>

             <span className="moneyListItemNumber">{amount.id}</span>
             <span className="moneyListItemAmount">{amount.amount}</span>
           </li>

          ))}
         
         
        </ul> 
        
      </div>

        </>
      ):<Start setUsername={setUsername}/>}
      
     
    </div>

 
  );
}

export default App;
