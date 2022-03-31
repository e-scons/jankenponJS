let mao = document.getElementById("mao");
let mao2 = document.getElementById("mao2");
let resultado = document.getElementById("result");
let computador = document.getElementById("computador");
let jogador = document.getElementById("jogador");

function sortear(){
    let itens = ["Pedra","Papel","Tesoura"];
    function embaralhar(){
        itens.sort(() => Math.random() - 0.5);
    }
   embaralhar(itens);
   console.log(itens[0])
   return itens[0];
    
}


function pedra(a){
    mao.src='img/fist.png';
    if (a=="Pedra"){
        mao2.src='img/fist_r.png';
        computador.src='img/angry.png';
        jogador.src='img/angry.png';
        console.log("empate");
        resultado.innerHTML="Empate! Jogue novamente!";
    } else if(a=="Tesoura"){
        mao2.src='img/v-r.png';
        computador.src='img/crying.png';
        jogador.src='img/lol.png';
        console.log("ganhou")
        resultado.innerHTML="Você ganhou! Jogue novamente!";
    } else{
        mao2.src='img/hand_r.png';
        computador.src='img/lol.png';
        jogador.src='img/crying.png';
        console.log("perdeu")
        resultado.innerHTML="Você perdeu! Jogue novamente!";
    }}

function papel(a){
    mao.src='img/hand.png';
    if (a=="Papel"){
        mao2.src='img/hand_r.png';
        computador.src='img/angry.png';
        jogador.src='img/angry.png';
        console.log("empate");
        resultado.innerHTML="Empate! Jogue novamente!";
    } else if(sortear()=="Pedra"){
        mao2.src='img/fist_r.png';
        computador.src='img/crying.png';
        jogador.src='img/lol.png';
        console.log("ganhou")
        resultado.innerHTML="Você ganhou! Jogue novamente!";
    }else{
        mao2.src='img/v-r.png';
        computador.src='img/lol.png';
        jogador.src='img/crying.png';
        console.log("perdeu")
        resultado.innerHTML="Você perdeu! Jogue novamente!";
    }
}

function tesoura(a){
    mao.src='img/letter-v.png';
    if (a=="Tesoura"){
        mao2.src='img/letter-v-r.png';
        computador.src='img/angry.png';
        jogador.src='img/angry.png';
        console.log("empate");
        resultado.innerHTML="Empate! Jogue novamente!";
    }else if(a=="Pedra"){
        mao2.src='img/fist_r.png';
        computador.src='img/lol.png';
        jogador.src='img/crying.png';
        console.log("perdeu")
        resultado.innerHTML="Você perdeu! Jogue novamente!";
    }else{
        mao2.src='img/hand_r.png';
        computador.src='img/crying.png';
        jogador.src='img/lol.png';
        console.log("ganhou")
        resultado.innerHTML="Você ganhou! Jogue novamente!";
    }
}
