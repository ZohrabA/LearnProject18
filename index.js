////    let a = 4 ;  console.log(a === 4 ? "yes" : "no")   // ternary operator



let game = document.getElementById("game");
let win = document.getElementById("win")
let res = document.getElementById("res")
let player = true;
let gameArray = Array(9).fill(null);
let winer = null;


//console.log(gameArray)
let winner = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

const findWinner = () =>{
    winner.map(find =>{
        //let a = find[0]
        //let b = find[1]
        //let c = find[2]
        let [a, b, c] = find;
        if(gameArray[a] && gameArray[a] === gameArray[b] && gameArray[b] === gameArray[c]){
          win.style.display= "flex"
          win.innerText= `${gameArray[a] + "  Qalibdir"}`;


          let cells = document.querySelectorAll(".cell")
          cells[a].classList.add("ligh");
          cells[b].classList.add("ligh");
          cells[c].classList.add("ligh");
          winer = gameArray[a]
        //   [...cells].map(fin =>{
        //        fin.classList.add("blo")
        //   })
          
        }
    })

let count = gameArray.filter(a => !a).length

if(!winer && !count){

    
    win.style.display= "flex"
    win.innerText= `Draw`
}

}



for(let i = 0; i < 9; i ++){
    
    let cell = document.createElement("div");
    cell.classList.add("cell", `cordinate-${i}`);
    
    
    
    cell.addEventListener("click", ()=>{
        
        if(cell.innerText == "" && !winer){
            cell.innerText = player ? "X" : "O";
            let cordinate = cell.classList.value
            // cordinate = cordinate.replace(/[^0-9]/gi, "")
            //cordinate = cordinate.slice(-1)
            //cordinate = cordinate.split("-")[1]
            cordinate = cordinate[cordinate.length -1]
            console.log(cordinate)
            gameArray[cordinate] = player ? "X" : "O";
            player = !player
            findWinner()
            
           //console.log(gameArray)
        }
            
        })
        
    
    game.append(cell);

}


res.addEventListener("click", ()=>{

[...document.querySelectorAll(".cell")].map((cell) => (cell.innerText =""))
gameArray = Array(9).fill(null)
win.style.display="none"
win.innerText =""
player = !player


winner.map(find =>{
    
    let [a, b, c] = find;
let cells = document.querySelectorAll(".cell")
          cells[a].classList.remove("ligh");
          cells[b].classList.remove("ligh");
          cells[c].classList.remove("ligh");
          winer = null;
    //       [...cells].map(fin =>{
    //         fin.classList.remove("blo")
    //    })
})

})