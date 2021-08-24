function taAberto(date) {
    const horas = date.getHours();
    const minutos = date.getMinutes();

    if (horas >= 8 && horas <= 18){
        if(horas === 18 && minutos > 0){
            return false;
        } else{
            return true;
        }
    } else {
        return false;
    }
}

console.log(taAberto(new Date(2015,1,1,12)));
console.log(taAberto(new Date(2015,1,1,18,1)));