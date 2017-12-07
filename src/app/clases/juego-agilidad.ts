export class JuegoAgilidad {

    numeroUno: number;
    numeroDos: number;
    operadores:Array<string> = ['+','-'];
    operadorToShow:string;
    public numeroIngresando:number;
    public puntajeFinal:number;

    constructor()
    {

    }

    public GenerarJuego()
    {
        this.numeroUno =  this.randomIntFromInterval(0,20);
        this.numeroDos =  this.randomIntFromInterval(0,20);
        this.operadorToShow = this.operadores[this.randomIntFromInterval(0,1)];
    }

    public randomIntFromInterval(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    public Verificar()
    {   
        console.log(this.ResultadoOperacion());

        if(this.numeroIngresando == this.ResultadoOperacion())
            return true;
        else
            return false;
    }

    public ResultadoOperacion()
    {
        switch (this.operadorToShow) {
            case "+":
                return this.numeroUno + this.numeroDos;
            case "-":
                return this.numeroUno - this.numeroDos;
        }
    }

    public TerminarJuegoGanador(tiempoSobrante:number)
    {
            this.puntajeFinal = 1000;
            this.puntajeFinal += this.puntajeFinal * tiempoSobrante;    
    }

}
