function taAberto(date) {
    const horas = date.getHours();
    const minutos = date.getMinutes();
    const diaSemana = date.getDay();

    
    if (diaSemana !== 0 && diaSemana !== 6 && (horas >= 8 && horas <= 18)){
        if(horas === 18 && minutos > 0){
            return false;
        } else{
            return true;
        }
    } else {
        return false;
    }
}

console.log(taAberto(new Date(2021,3,25,12)));
console.log(taAberto(new Date(2021,3,26,12)));
console.log(taAberto(new Date(2021,3,26,7,59)));
