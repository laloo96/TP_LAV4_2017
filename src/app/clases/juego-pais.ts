export class JuegoPais {
    public misPaises:any = '{"losPaises":[{"pais":"argelia.png","op1":"Argelia","op2":"Suiza","op3":"Tunez","rta":"Argelia"},'+
    '{"pais":"argentina.png","op1":"Honduras","op2":"Argentina","op3":"Chipre","rta":"Argentina"},'+
    '{"pais":"australia.png","op1":"Inglaterra","op2":"Australia","op3":"Austria","rta":"Australia"},'+
    '{"pais":"belgica.png","op1":"Gabon","op2":"Rumania","op3":"Belgica","rta":"Belgica"},'+
    '{"pais":"bolivia.png","op1":"Senegal","op2":"Bolivia","op3":"Ghana","rta":"Bolivia"},'+
    '{"pais":"burkinafaso.png","op1":"Uganda","op2":"Burkina Faso","op3":"Senegal","rta":"Burkina Faso"},'+
    '{"pais":"china.png","op1":"Kazajistan","op2":"China","op3":"Vietnam","rta":"China"},'+
    '{"pais":"colombia.png","op1":"Colombia","op2":"Venezuela","op3":"Ecuador","rta":"Colombia"},'+
    '{"pais":"costademarfil.png","op1":"Irlanda","op2":"Costa de Marfil","op3":"Hungria","rta":"Costa de Marfil"},'+
    '{"pais":"croacia.png","op1":"Eslovaquia","op2":"Croacia","op3":"Eslovenia","rta":"Croacia"},'+
    '{"pais":"ecuador.png","op1":"Colombia","op2":"España","op3":"Ecuador","rta":"Ecuador"},'+
    '{"pais":"egipto.png","op1":"Emiratos Arabes","op2":"Egipto","op3":"Sudan","rta":"Egipto"},'+
    '{"pais":"emiratosarabes.png","op1":"Egipto","op2":"Iran","op3":"Emiratos Arabes","rta":"Emiratos Arabes"},'+
    '{"pais":"eslovenia.png","op1":"Eslovaquia","op2":"Lituania","op3":"Eslovenia","rta":"Eslovenia"},'+
    '{"pais":"españa.png","op1":"Peru","op2":"España","op3":"Colombia","rta":"España"},'+
    '{"pais":"ghana.png","op1":"Ghana","op2":"Bolivia","op3":"Senegal","rta":"Ghana"},'+
    '{"pais":"honduras.png","op1":"Argentina","op2":"Somalia","op3":"Honduras","rta":"Honduras"},'+
    '{"pais":"hungria.png","op1":"Italia","op2":"Hungria","op3":"Iran","rta":"Hungria"},'+
    '{"pais":"india.png","op1":"Costa de Marfil","op2":"Italia","op3":"India","rta":"India"},'+
    '{"pais":"irak.png","op1":"Irak","op2":"Iran","op3":"Siria","rta":"Irak"},'+
    '{"pais":"iran.png","op1":"Siria","op2":"Iran","op3":"Sudan","rta":"Iran"},'+
    '{"pais":"italia.png","op1":"Francia","op2":"Rumania","op3":"Italia","rta":"Italia"},'+
    '{"pais":"japon.png","op1":"Kazajistan","op2":"Turkmenistán","op3":"Japon","rta":"Japon"},'+
    '{"pais":"kenia.png","op1":"Togo","op2":"Kenia","op3":"Tanzania","rta":"Kenia"},'+
    '{"pais":"koreadelsur.png","op1":"Japon","op2":"Corea del Sur","op3":"Corea del Norte","rta":"Corea del Sur"},'+
    '{"pais":"liberia.png","op1":"Estados Unidos","op2":"Inglaterra","op3":"Liberia","rta":"Liberia"},'+
    '{"pais":"mexico.png","op1":"Italia","op2":"Mexico","op3":"Hungria","rta":"Mexico"},' +
    '{"pais":"noruega.png","op1":"Finlandia","op2":"Islandia","op3":"Noruega","rta":"Noruega"},'+
    '{"pais":"nuevazelanda.png","op1":"Australia","op2":"Nueva Zelanda","op3":"Inglaterra","rta":"Nueva Zelanda"},'  +
    '{"pais":"panama.png","op1":"Paraguay","op2":"Panama","op3":"San Marino","rta":"Panama"},'+
    '{"pais":"paraguay.png","op1":"Panama","op2":"Paraguay","op3":"Emiratos Arabes","rta":"Paraguay"},'+
    '{"pais":"peru.png","op1":"Austria","op2":"Peru","op3":"Honduras","rta":"Peru"},'+
    '{"pais":"polonia.png","op1":"Turquia","op2":"Polonia","op3":"Alemania","rta":"Polonia"},' +
    '{"pais":"portugal.png","op1":"Kenia","op2":"Portugal","op3":"Trinidad y Tobago","rta":"Portugal"},'+
    '{"pais":"republicacheca.png","op1":"Eslovaquia","op2":"Eslovenia","op3":"Republica Checa","rta":"Republica Checa"},' +
    '{"pais":"republicadominicana.png","op1":"Panama","op2":"Haiti","op3":"Republica Dominicana","rta":"Republica Dominicana"},'+
    '{"pais":"rumania.png","op1":"Rumania","op2":"Belgica","op3":"Francia","rta":"Rumania"},' +
    '{"pais":"rusia.png","op1":"Esovaquia","op2":"Lituania","op3":"Rusia","rta":"Rusia"},'+
    '{"pais":"serbia.png","op1":"Croacia","op2":"Rusia","op3":"Serbia","rta":"Serbia"},'+
    '{"pais":"siria.png","op1":"Egito","op2":"Siria","op3":"Irak","rta":"Siria"},'+
    '{"pais":"somalia.png","op1":"Honduras","op2":"Haiti","op3":"Somalia","rta":"Somalia"},'+
    '{"pais":"sudan.png","op1":"Egipto","op2":"Sudan","op3":"Irak","rta":"Sudan"},'+
    '{"pais":"suiza.png","op1":"Suecia","op2":"Tunez","op3":"Noruega","rta":"Suiza"},'+
    '{"pais":"tunez.png","op1":"Suiza","op2":"Suecia","op3":"Tunez","rta":"Tunez"},'+
    '{"pais":"ucrania.png","op1":"Gabon","op2":"Kazajistan","op3":"Ucrania","rta":"Ucrania"},'+
    '{"pais":"usa.png","op1":"Estados Unidos","op2":"Liberia","op3":"Inglaterra","rta":"Estados Unidos"},'+
    '{"pais":"venezuela.png","op1":"Colombia","op2":"Ecuador","op3":"Venezuela","rta":"Venezuela"},'+
    '{"pais":"vietnam.png","op1":"China","op2":"Vietnam","op3":"Libia","rta":"Vietnam"}]}';


    cantidadAdivinadas:number;
    cantidadErrores:number;
    public puntajeFinal:number;
    adivino:boolean;

    constructor()
    {
        this.cantidadAdivinadas = 0;
        this.cantidadErrores = 0;
        this.puntajeFinal = 0;
    }

    public enviarInfo(eleccion:string,rta:string)
    {
        if(eleccion == rta)
        {
            this.cantidadAdivinadas++;
            this.adivino = true;
        }
        else
        {
            this.cantidadErrores++;
            this.adivino = false;
        }

        return this.adivino;
    }

    public reiniciarJuego()
    {
        this.cantidadAdivinadas = 0;
        this.cantidadErrores = 0;
        this.puntajeFinal = 0;
    }

    public PuntajeFinal()
    {
        console.log("CantidadE:"+this.cantidadErrores);
        console.log("CantidadAcert:"+this.cantidadAdivinadas);
        this.puntajeFinal += this.cantidadAdivinadas*1000;
        this.puntajeFinal -= this.cantidadErrores*100;

        if(this.puntajeFinal <= 0)
            this.puntajeFinal = 0;
        
        return this.puntajeFinal;

    }
}