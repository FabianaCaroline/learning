const jogada1 = "pedra"
const jogada2 = "pedra"


if(jogada1==="tesoura"){
    if(jogada2==="pedra"){
        console.log("pedra ✊");
    } else if(jogada2==="papel"){
        console.log("tesoura ✌️");
    } else{
        console.log("empate 🤡");
    }
} else if (jogada1==="pedra"){
    if(jogada2==="tesoura"){
        console.log("pedra ✊");
    } else if(jogada2==="papel"){
        console.log("papel 🖐️");
    } else{
        console.log("empate 🤡");
    }
} else{
    if(jogada2==="pedra"){
        console.log("papel 🖐️");
    } else if(jogada2==="tesoura"){
        console.log("tesoura ✌️");
    } else{
        console.log("empate 🤡");
    }
}