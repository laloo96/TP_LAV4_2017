export class JuegoPiedraPapelTijera {

    chances:number;
    puntaje:number;
    eleccionMaquina:number;
    resultado:string;

    constructor ()
    {
        this.chances = 3;
        this.puntaje = 0;
    }

    
    public get maquinasPick() : string {
         if(this.eleccionMaquina >= 1 && this.eleccionMaquina <= 10)
            return "../../assets/imagenes/Piedra.jpg";      
         else if(this.eleccionMaquina > 10 && this.eleccionMaquina <=20)
            return "../../assets/imagenes/Papel.jpg";
         else
            return "../../assets/imagenes/Tijera.jpg";
    }

    
    public get puntajes() : number {
        return this.puntaje;
    }
    
    

    private maquinaPick()
    {
        this.eleccionMaquina = this.randomIntFromInterval(0,30);
    }

    private randomIntFromInterval(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    public evaluarResultado(eleccionUsuario:number)
    {
        this.maquinaPick();
        
        if (eleccionUsuario == 1) {
            
            if (this.eleccionMaquina >= 1 && this.eleccionMaquina <= 10) 
            this.resultado = 'draw'; 
            else if(this.eleccionMaquina > 10 && this.eleccionMaquina <=20)
            this.resultado = 'lose';
            else
            this.resultado = 'win';    
        }
        else if (eleccionUsuario == 2) {
            if (this.eleccionMaquina >= 1 && this.eleccionMaquina <= 10) 
            this.resultado = 'win'; 
            else if(this.eleccionMaquina > 10 && this.eleccionMaquina <=20)
            this.resultado = 'draw';
            else
            this.resultado = 'lose';    
        }
        else{
            if (this.eleccionMaquina >= 1 && this.eleccionMaquina <= 10) 
            this.resultado = 'lose'; 
            else if(this.eleccionMaquina > 10 && this.eleccionMaquina <=20)
            this.resultado = 'win';
            else
            this.resultado = 'draw';    
        }

        this.PuntajeYChances(this.resultado);

        return this.resultado;
    }


    private PuntajeYChances(resultado:string)
    {
            switch (this.chances) {
                case 1:
                    if (resultado == 'win')
                        this.puntaje +=100;
                    else if(resultado == 'draw')
                        this.puntaje +=50;
                    else
                        this.puntaje +=5;
                    
                    break;
                case 2:
                    if (resultado == 'win')
                        this.puntaje +=200;
                    else if(resultado == 'draw')
                        this.puntaje +=50;
                    else
                        this.puntaje +=20;
                    
                    break;
                case 3:
                    if (resultado == 'win')
                        this.puntaje +=500;
                    else if(resultado == 'draw')
                        this.puntaje +=50;
                    else
                        this.puntaje +=20;
                    
                    break;
            }

            this.chances--;
    }
    
    public Reiniciar()
    {
        this.chances = 3;
        this.puntaje = 0;
    }













}



