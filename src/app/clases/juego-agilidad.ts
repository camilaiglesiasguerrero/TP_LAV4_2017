export class JuegoAgilidad {
    numero1: number;
    operador: string;
    numero2: number;
    resultado: number;
    needCalculo: boolean = true;
    respuesta: number;
    temporizador: any;
    nombre : string;
    Gano: boolean;
    Jugador: string;

    constructor() { 
        }
      
        public GenerarCalculo():void{
          this.Gano =false;
          this.resultado = 0;
          this.respuesta = 0;
          this.temporizador = setTimeout (this.Verificar,1000);
          this.numero1 = Math.floor(Math.random()*10+1);
          this.numero2 = Math.floor(Math.random()*10+1);
          let operadorN = Math.floor((Math.random()*4)+1);

          if(operadorN == 4)
          {
              while(this.numero1%this.numero2 != 0)
              {
                this.numero1 = Math.floor(Math.random()*10+1);
                this.numero2 = Math.floor(Math.random()*10+1);
              }
          }
          switch (operadorN) {
              case 1:
                this.operador = '+';
                this.resultado = (this.numero1 + this.numero2);
                break;
              case 2:
                this.operador = '-';
                this.resultado = this.numero1 - this.numero2;
                break;
              case 3:
                this.operador = '*';
                this.resultado = this.numero1 * this.numero2;
                break;
              case 4:
                this.operador = '/';
                this.resultado = Math.round(this.numero1 / this.numero2);
                break;
          }
          console.log(this.numero1, this.operador, this.numero2, this.resultado);
          this.needCalculo = false;
          
        }

    public Verificar():boolean {
        //console.log("estoy verificando en juego-agilidad");
        if(this.resultado == this.respuesta)
        {
            this.Gano = true;
            this.needCalculo = true;
            clearTimeout(this.temporizador);
        }
        else
        {
            this.Gano = false;
            this.needCalculo = false;
        }
        
        return this.Gano; 
    }
}