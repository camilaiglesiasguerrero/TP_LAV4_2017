export class Jugador {
    
    private _email : string;
    public get email() : string {
        return this._email;
    }
    public set email(v : string) {
        this._email = v;
    }

    private _clave : string;
    public get clave() : string {
        return this._clave;
    }
    public set clave(v : string) {
        this._clave = v;
    }
    
    
    constructor() {
                
    }

    public Guardar()
    {
       localStorage.setItem('Jugador',JSON.stringify(this));
    }

    public Traer()
    {
        let jugador = JSON.parse(localStorage.getItem('Jugador'));
        if(jugador!=null){
            this.email = jugador._email;
            this.clave = jugador._clave;
        }
        else{
            this.email = '';
            this.clave = '';
        }
        
    }

    public Clear()
    {
        localStorage.clear();   
    }

 
}
