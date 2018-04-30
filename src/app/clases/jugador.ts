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
    
    
    private _jugadas : Array<any>;
    public get jugadas() : Array<any> {
        return this._jugadas;
    }
    public set jugadas(v : Array<any>) {
        this._jugadas = v;
    }
    

    public Guardar()
    {
       localStorage.setItem('Jugador',JSON.stringify(this));
    }

    public Traer()
    {
        let jugador = JSON.parse(localStorage.getItem('Jugador'));
        if(jugador!=null){
            this._email = jugador._email;
            this._clave = jugador._clave;
        }
        else{
            this._email = '';
            this._clave = '';
        }
        
    }

    public Clear()
    {
        localStorage.clear();   
    }
}
