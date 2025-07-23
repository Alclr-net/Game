const passWord = ["w", "0", "$", "98", "6"];
let wrongClick = 0;
const playGround = document.getElementsByClassName("playground");
const firstUserInput = document.getElementById("inputData1");
const secondUserInput = document.getElementById("inputData2");
const thirdUserInput = document.getElementById("inputData3");
const fourthUserInput = document.getElementById("inputData4");
const fifthUserInput = document.getElementById("inputData5");
const btnToAddData1 = document.querySelectorAll(".option1");
const btnToAddData2 = document.querySelectorAll(".option2");
const btnToAddData3 = document.querySelectorAll(".option3");
const btnToAddData4 = document.querySelectorAll(".option4");
const btnToAddData5 = document.querySelectorAll(".option5");
const btn = document.getElementById("start");
const userInput = document.getElementsByClassName("numvalue");
const alphabates = document.getElementsByClassName("alphabates");
const numbers = document.getElementsByClassName("numbers");
const sign = document.getElementsByClassName("sign");
const science = document.getElementsByClassName("science");
const maths = document.getElementsByClassName("maths");
const rope = document.getElementsByClassName("rope");
const face = document.getElementsByClassName("face");
const upperBody = document.getElementsByClassName("upperbody");
const leftArm = document.getElementsByClassName("left_arm");
const rightArm = document.getElementsByClassName("right_arm");
const leftLeg = document.getElementsByClassName("left_leg");
const rightLeg = document.getElementsByClassName("right_leg");
const soundCorrect = document.getElementById("correctSound");
const soundWrong = document.getElementById("wrongSound");
const soundWin = document.getElementById("winSound");
const winD  = document.getElementsByClassName("pitch");
const hangMan  = document.getElementsByClassName("hangman");
const chance = document.getElementById("chance");
const guess = document.getElementById("guess");
const guesses= document.getElementsByClassName("guess_values");
const inst = document.getElementsByClassName("instruction");
const winAni =  document.getElementById("win");
const nextbtn = document.getElementsByClassName("next");
const hangmanC = document.getElementById("h2");
alphabates[0].style.display = "none";
 numbers[0].style.display = "none";
 sign[0].style.display = "none";
 science[0].style.display = "none";
 maths[0].style.display = "none";
 hangMan[0].style.display = "none";
 guesses[0].style.display = "none";
 chance.style.display = "none";
 nextbtn[0].style.display = "none";
 btn.addEventListener("click",()=>{
alphabates[0].style.display = "";
 hangMan[0].style.display = "";
  guesses[0].style.display = "";
btn.remove();
inst[0].remove();
guess.remove();
hangmanC.remove();
 })
btnToAddData1.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "W") {
      firstUserInput.textContent = btn.textContent;
      btnToAddData1.forEach((btn) => {
        btn.disabled = true;
        soundCorrect.play();
        alphabates[0].style.display = "none";
         numbers[0].style.display = "";
      });
    } else {
      wrongSound.play();
      wrongClick++;
      switch (wrongClick) {
        case 1:
          rope[0].id = "rope";
          break;
        case 2:
          face[0].id = "face";
          break;
        case 3:
          upperBody[0].id = "upperbody";
          break;
        case 4:
          leftArm[0].id = "left_arm";
          rightArm[0].id = "right_arm";
          break;
        case 5:
          leftLeg[0].id = "left_leg";
          rightLeg[0].id = "right_leg";
          break;
        case 6:
          playGround[0].remove();
          break;
        default:
          return;
      }
    }
  });
});
btnToAddData2.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "0") {
      secondUserInput.textContent = btn.textContent;
      btnToAddData2.forEach((btn) => {
        btn.disabled = true;
        soundCorrect.play();
           numbers[0].style.display = "none";
           sign[0].style.display = "";
      });
    } else {
      wrongSound.play();
      wrongClick++;
      switch (wrongClick) {
        case 1:
          rope[0].id = "rope";
          break;
        case 2:
          face[0].id = "face";
          break;
        case 3:
          upperBody[0].id = "upperbody";
          break;
        case 4:
          leftArm[0].id = "left_arm";
          rightArm[0].id = "right_arm";
          break;
        case 5:
          leftLeg[0].id = "left_leg";
          rightLeg[0].id = "right_leg";
          break;
        case 6:
          playGround[0].remove();
          break;
        default:
          return;
      }
    }
  });
});
btnToAddData3.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "$") {
      thirdUserInput.textContent = btn.textContent;
      btnToAddData3.forEach((btn) => {
        btn.disabled = true;
        soundCorrect.play();
          sign[0].style.display = "none";
           science[0].style.display = "";

      });
    } else {
      wrongSound.play();
      wrongClick++;
      switch (wrongClick) {
        case 1:
          rope[0].id = "rope";
          break;
        case 2:
          face[0].id = "face";
          break;
        case 3:
          upperBody[0].id = "upperbody";
          break;
        case 4:
          leftArm[0].id = "left_arm";
          rightArm[0].id = "right_arm";
          break;
        case 5:
          leftLeg[0].id = "left_leg";
          rightLeg[0].id = "right_leg";
          break;
        case 6:
          playGround[0].remove();
          break;
        default:
          return;
      }
    }
  });
});
btnToAddData4.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "98") {
      fourthUserInput.textContent = btn.textContent;
      btnToAddData4.forEach((btn) => {
        btn.disabled = true;
        soundCorrect.play();
          science[0].style.display = "none";
           maths[0].style.display = "";
      });
    } else {
      wrongSound.play();
      wrongClick++;
      switch (wrongClick) {
        case 1:
          rope[0].id = "rope";
          break;
        case 2:
          face[0].id = "face";
          break;
        case 3:
          upperBody[0].id = "upperbody";
          break;
        case 4:
          leftArm[0].id = "left_arm";
          rightArm[0].id = "right_arm";
          break;
        case 5:
          leftLeg[0].id = "left_leg";
          rightLeg[0].id = "right_leg";
          break;
        case 6:
          playGround[0].remove();
          break;
        default:
          return;
      }
    }
  });
});
btnToAddData5.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "6") {
      fifthUserInput.textContent = btn.textContent;
      btnToAddData5.forEach((btn) => {
        btn.disabled = true;
        soundWin.play();
           winAni.style.backgroundImage = 'url("/party.gif" )' 
        winD[0].style.display = "none";
        hangMan[0].style.display = "none";
        nextbtn[0].style.display = "";

      });
    } else {
      wrongSound.play();
      wrongClick++;
      switch (wrongClick) {
        case 1:
          rope[0].id = "rope";
          break;
        case 2:
          face[0].id = "face";
          break;
        case 3:
          upperBody[0].id = "upperbody";
          break;
        case 4:
          leftArm[0].id = "left_arm";
          rightArm[0].id = "right_arm";
          break;
        case 5:
          leftLeg[0].id = "left_leg";
          rightLeg[0].id = "right_leg";
          break;
        case 6:
          playGround[0].remove();
          break;
        default:
          return;
      }
    }
  });
});
nextbtn[0].addEventListener("click",()=>{
    document.body.className ="fade-out";
    setTimeout(()=>{
      window.location.href ="/welcome/level-two/level2.html"
    },500)
})