const { format } = require("date-fns");
const { default: ptBR } = require("date-fns/locale/pt-BR");

function formatacao_a(date) {
    return format(date, "dd 'de' MMMM 'de' yyyy",{ locale: ptBR});
}
function formatacao_b(date) {
    return format(date, "dd/MM/yyyy",{ locale: ptBR});
}
function formatacao_c(date) {
    return format(date, "d MMM",{ locale: ptBR});
}
function formatacao_d(date) {
    return format(date, "dd MMM yyyy",{ locale: ptBR});
}
function formatacao_e(date) {
    return format(date, "dd 'de' MMM 'de' yyyy",{ locale: ptBR});
}
function formatacao_f(date) {
    return format(date, "dd/MMM",{ locale: ptBR});
}

const date = new Date();

console.log(formatacao_a(date), "\n", formatacao_b(date), "\n", formatacao_c(date), "\n", formatacao_d(date), "\n", formatacao_e(date), "\n", formatacao_f(date));