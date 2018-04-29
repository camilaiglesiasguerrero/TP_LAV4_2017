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
        console.log("adios localstorage");
        localStorage.clear();
        console.log(JSON.parse(localStorage.getItem('Jugador')));
    }
}
