document.querySelector("#start-game").addEventListener("click", () => {
    document.querySelector("#start-game").style.display = "none";
    document.querySelector(".second-container").style.display = "";
});

//--harry potter--\\

document.querySelector(".HarryPotter").addEventListener("click", () => {
    document.querySelector(".second-container").style.display = "none";
    document.querySelector(".memory-game").style.display = "flex";
    //--get harryPotter API link--
    $.getJSON("https://hp-api.onrender.com/api/characters", function (data){
        var imageSrc = data[0].image;
        $(".back-face").attr("src", imageSrc);
    //--now i will call the API link to set the characters images!
    $.getJSON("https://hp-api.onrender.com/api/characters", function(data){

        //--now i will save each character img as a parameter!!!--
        var character1 = data[2].image;
        var character2 = data[3].image;
        var character3 = data[4].image;
        var character4 = data[5].image;
        var character5 = data[6].image;
        var character6 = data[7].image;
        //now ill set the src attribute each character fot two memory cards.
        $(".front-face.one").attr("src", character1);
        $(".front-face.one").attr("src", character1);
        
        $(".front-face.two").attr("src", character2);
        $(".front-face.two").attr("src", character2);
        
        $(".front-face.three").attr("src", character3);
        $(".front-face.three").attr("src", character3);
        
        $(".front-face.four").attr("src", character4);
        $(".front-face.four").attr("src", character4);
        
        $(".front-face.five").attr("src", character5);
        $(".front-face.five").attr("src", character5);
        
        $(".front-face.six").attr("src", character6);
        $(".front-face.six").attr("src", character6);
    
       })
    });
});

//--Dogs--\\
document.querySelector(".Dogs").addEventListener("click", ()=>{
    document.querySelector(".second-container").style.display = "none";
    document.querySelector(".memory-game").style.display = "flex";
    
    //--get API link to set one images to all the cards --\\
    $.getJSON("https://dog.ceo/api/breed/hound/images", function(data){
        var imageSrc = data.message[750];
        $(".back-face").attr("src", imageSrc);
    
        // --now i will get images and choose each character to save it as a parameter-->  
    $.getJSON("https://dog.ceo/api/breed/hound/images", function(data){
        var dog1 = data.message[3];
        var dog2 = data.message[270];
        var dog3 = data.message[390];
        var dog4 = data.message[490];
        var dog5 = data.message[540];
        var dog6 = data.message[538];

    //--ill choose to set each character image that i saved to witch card i want to add :)-->
    //-- by using the src attr-->
        $(".front-face.one").attr("src", dog1);    
        $(".front-face.one").attr("src", dog1);
        
        $(".front-face.two").attr("src", dog2);
        $(".front-face.two").attr("src", dog2);

        $(".front-face.three").attr("src", dog3);
        $(".front-face.three").attr("src", dog3);
        
        $(".front-face.four").attr("src", dog4);
        $(".front-face.four").attr("src", dog4);
        
        $(".front-face.five").attr("src", dog5);
        $(".front-face.five").attr("src", dog5);
        
        $(".front-face.six").attr("src", dog6);
        $(".front-face.six").attr("src", dog6);
        
      })    
    })
});


//--flags--\\
document.querySelector(".Flags").addEventListener("click", ()=>{
    document.querySelector(".second-container").style.display = "none";
    document.querySelector(".memory-game").style.display = "flex";
  
    // i putted the same image for all the cards by using FOREACH---->

    const imageUrl = "https://flagsapi.com/MA/flat/64.png";
      document.querySelectorAll(".back-face").forEach((backFace) => {
       backFace.setAttribute("src", imageUrl);
      });
    
    // i putted for each two cards the same flag images-->
  
    const frontFaces = document.querySelectorAll(".front-face");
      frontFaces[0].src = "https://flagsapi.com/BE/flat/64.png";
      frontFaces[1].src = "https://flagsapi.com/BE/flat/64.png";
      
      frontFaces[2].src = "https://flagsapi.com/AL/flat/64.png";
      frontFaces[3].src = "https://flagsapi.com/AL/flat/64.png";
      
      frontFaces[4].src = "https://flagsapi.com/IT/flat/64.png";
      frontFaces[5].src = "https://flagsapi.com/IT/flat/64.png";
      
      frontFaces[6].src = "https://flagsapi.com/PT/flat/64.png";
      frontFaces[7].src = "https://flagsapi.com/PT/flat/64.png";
      
      frontFaces[8].src = "https://flagsapi.com/PR/flat/64.png";
      frontFaces[9].src = "https://flagsapi.com/PR/flat/64.png";
      
      frontFaces[10].src = "https://flagsapi.com/RO/flat/64.png";
      frontFaces[11].src = "https://flagsapi.com/RO/flat/64.png";
      
      frontFaces[12].src = "https://flagsapi.com/RU/flat/64.png";
      frontFaces[13].src = "https://flagsapi.com/RU/flat/64.png";
      
      frontFaces[14].src = "https://flagsapi.com/TR/flat/64.png";
      frontFaces[15].src = "https://flagsapi.com/TR/flat/64.png";
      
      frontFaces[16].src = "https://flagsapi.com/TH/flat/64.png";
      frontFaces[17].src = "https://flagsapi.com/TH/flat/64.png";
      
      frontFaces[18].src = "https://flagsapi.com/NZ/flat/64.png";
      frontFaces[19].src = "https://flagsapi.com/NZ/flat/64.png";
      
      frontFaces[20].src = "https://flagsapi.com/CA/flat/64.png";
      frontFaces[21].src = "https://flagsapi.com/CA/flat/64.png";
      
      frontFaces[22].src = "https://flagsapi.com/BR/flat/64.png";
      frontFaces[23].src = "https://flagsapi.com/BR/flat/64.png";
    });

    //random button ===>

    const randomBtn = document.getElementById("random");
    const optionBtns = document.querySelectorAll(".option");
      randomBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * optionBtns.length);
        optionBtns[randomIndex].click();
      });

  




const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;

shuffle();
cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

function shuffle() {
  cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 12); // give me random numbers between 0 - 11
    card.style.order = randomPosition;
  });
};

function flipCard() {
  if (lockBoard) {
    return;
  } else if (this === firstCard) {
    return;
  } else {
    this.classList.add("flip");

    // fliped first card
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;

      // fliped second card
    } else {
      secondCard = this;
      checkForMatch();
    };
  };
};

function checkForMatch() {
  lockBoard = true;
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
};

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
};

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1500);
};

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
};

document.querySelector("#restart-game").addEventListener("click", () => {
    location.reload();
  });
