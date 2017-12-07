interface Palabras {
    ordenada: string;
    desordenada: string;    
}

export class JuegoAnagrama{

    palabraDesordenada:string;
    public misPalabras:Palabras[];
    private indexForWords:Array<number>;
    public cantidadAdivinadas:number;
    public cantidadErrores:number;
    public puntajeFinal:number;
    public cantidadJugadas:number;
    
    WordsToOrdenar = [
        {ordenada: 'juego', desordenada: 'uegjo' },
        {ordenada: 'noche', desordenada: 'cenho' },
        {ordenada: 'futbol', desordenada: 'olbtuf' },
        {ordenada: 'televisor', desordenada: 'sorvilete'},
        {ordenada: 'amar', desordenada: 'rama'},
        {ordenada: 'orenador', desordenada: 'redorando'},
        {ordenada: 'celular', desordenada: 'curalle'},
        {ordenada: 'camarin', desordenada: 'caminar'},
        {ordenada: 'caminar', desordenada: 'camarin'},
        {ordenada: 'astral', desordenada: 'saltar'},
        {ordenada: 'saltar', desordenada: 'astral'},
        {ordenada: 'ruido', desordenada: 'urdio'},
        {ordenada: 'saber', desordenada: 'bares'},
        {ordenada: 'bares', desordenada: 'besar'},
        {ordenada: 'encima', desordenada: 'camine'},
        {ordenada: 'robar', desordenada: 'barro'},
        {ordenada: 'carne', desordenada: 'cenar'},
        {ordenada: 'nacer', desordenada: 'crean'},
        {ordenada: 'pelear', desordenada: 'lepra'},
        {ordenada: 'salir', desordenada: 'liras'},
        {ordenada: 'raton', desordenada: 'antro'},
        {ordenada: 'tigre', desordenada: 'grite'},
        {ordenada: 'remera', desordenada: 'rearme'}
    ];

    constructor()
    {
        this.misPalabras = this.WordsToOrdenar;
        this.cantidadAdivinadas = 0;
        this.cantidadErrores = 0;
        this.puntajeFinal = 0;
        this.cantidadJugadas = 0;
  
    }

    public FinishGame()
    {
        this.puntajeFinal = this.cantidadAdivinadas * 1000;
        this.puntajeFinal -= this.cantidadErrores * 5;

        if(this.puntajeFinal < 0)
            this.puntajeFinal = 0;
    }
    
    public Reiniciar()
    {
        this.puntajeFinal = 0;
        this.cantidadAdivinadas = 0;
        this.cantidadErrores = 0;
        this.cantidadJugadas = 0;
    }


}
