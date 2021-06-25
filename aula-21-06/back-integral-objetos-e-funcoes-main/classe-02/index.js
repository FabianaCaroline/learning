const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function(){
        if (this.ligado) {
            console.log("Este carro já está ligado.");
        } else{
            this.ligado = true;
            console.log(`Carro ligado. Velocidade: ${this.velocidade}.`);
        }
    },
    desligar: function(){
        if (!this.ligado) {
            console.log("Este carro já está desligado.");
        } else{
            if(this.velocidade>0){
                this.ligado = false;
                console.log(`Carro desligado. Velocidade: ${this.velocidade}.`);
            } else{
                while(this.velocidade>0){
                    this.desacelerar();
                }
                this.ligado = false;
            }
        }
    },
    acelerar: function(){
        if(!this.ligado){
            console.log("Não é possível acelerar um carro desligado.");
        } else{
            this.velocidade += 10;
            console.log(`Carro ligado. Velocidade: ${this.velocidade}.`);
        }
    },
    desacelerar: function(){
        if(!this.ligado){
            console.log("Não é possível desacelerar um carro desligado.");
        } else if(this.velocidade>=10){
            this.velocidade -= 10;
            console.log(`Carro ligado. Velocidade: ${this.velocidade}.`);
        } else{
            this.velocidade = 0;
            console.log(`Carro ligado. Velocidade: ${this.velocidade}.`);
        }
    }
};

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();