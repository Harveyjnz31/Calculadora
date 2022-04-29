class display {

constructor (displayValorAnterior,displayValorActual) {

    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculador = new Calculadora();
    this.valorActual = '';
    this.valorAnterior = '';
}

agreagarNumero(numero){
this.valorActual = numero;
this.imprimirValores();
}

imprimirValores(){

    this.valorActual.textContent = this.valorActual;
    this.valorAnterior.textContent = this.valorAnterior;
}

}