const quiz=[
    {
        question: "Q1: In which manner Stack stores the data ?",
        a:"LastIn-LastOut",
        b:"LastIn-FirstOut",
        c:"FirstIn-FirstOut",
        d:"FirstIn-LastOut",
        ans: "ans2"
    },
    {
        question: "Q2: In which manner Queue stores the data ?",
        a:"LastIn-LastOut",
        b:"LastIn-FirstOut",
        c:"FirstIn-FirstOut",
        d:"FirstIn-LastOut",
        ans: "ans3"
    },
    {
        question: "Q3: In which traversal node read first ?",
        a:"Pre-Order",
        b:"Post-Order",
        c:"In-Order",
        d:"Depth-First-Search",
        ans: "ans1"
    },
    {
        question: "Q4: Which traversal Techinique used Queue data structure ?",
        a:"Depth-First-Search",
        b:"Binary Search",
        c:"Level Oreder Traversal",
        d:"Breadth-First-Search",
        ans: "ans4"  
    },
    {
        question: "Q5: Which option is best to solve recursion problems?",
        a:"Recursion",
        b:"Dynamic Programming",
        c:"BackTracking",
        d:"None of the Above",
        ans: "ans2"  
    }


]
 questions=document.querySelector(".questions");
 option1=document.querySelector("#option1");
 option2=document.querySelector("#option2");
 option3=document.querySelector("#option3");
 option4=document.querySelector("#option4");
 submit=document.querySelector("#submit");
 answers=document.querySelectorAll(".answer");
 const showscore=document.querySelector("#showScore"); //// all option's arrays

let score=0;
let QuestionCount=0;
loadQuestion=()=>{
    questions.innerHTML=quiz[QuestionCount].question;
    option1.innerHTML=quiz[QuestionCount].a;
    option2.innerHTML=quiz[QuestionCount].b;
    option3.innerHTML=quiz[QuestionCount].c;
    option4.innerHTML=quiz[QuestionCount].d;
}
loadQuestion();         /// first thing in js
let getAnswer=()=>{
  let answer;
  answers.forEach((element) => {
    if(element.checked){           /// which option is checked 
        answer=element.id;
    }
  });
  return answer
}
deselectAll=()=>{
    answers.forEach(element => {
        element.checked=false;
    });
}
submit.addEventListener("click",()=>{
    if(confirm(" Do you reaaly want to submit that answer")){
    answer=getAnswer();
    if(answer==quiz[QuestionCount].ans){
        score++;

    }
    deselectAll();
    QuestionCount++
    if (QuestionCount<quiz.length) {
        loadQuestion();
    }
    else{
        if(score==quiz.length){
        showscore.innerHTML=`
        <h3> Your Record is ${score}/${quiz.length} <br> 
        "You killed it man" ✌</h3>
        <button class="btn" onclick="location.reload()">Do Yoy Wanna play Again</button>
        `;}
        else if(score==0){
            showscore.innerHTML=`
            <h3> Your Record is ${score}/${quiz.length}<br> Shame  🤭</h3>
            <button class="btn" onclick="location.reload()">Do Yoy Wanna play Again</button>
            `; 
        }
        else if(score==1){
            showscore.innerHTML=`
            <h3> Your Record is ${score}/${quiz.length} only  😅</h3>
            <button class="btn" onclick="location.reload()">Do Yoy Wanna play Again</button>
            `;
        }
        else if(score>=quiz.length/2&&score!=quiz.length){
            showscore.innerHTML=`
            <h3> Your Record is ${score}/${quiz.length}<br> Keep it up  👏</h3>
            <button class="btn" onclick="location.reload()">Do Yoy Wanna play Again</button>
            `;
        }
        else{
            showscore.innerHTML=`
            <h3> Your Record is ${score}/${quiz.length} <br> 
            you should work a little harder 😓 </h3>
            <button class="btn" onclick="location.reload()">Do Yoy Wanna play Again</button>
            `;
        }
        showscore.classList.remove("scorearea");

    }
}
});

