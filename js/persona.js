class persona{
    constructor(nombre, apellido, numero, direccion){
        this.Nombre=nombre;
        this.Apellido=apellido; 
        this.Numero=numero;
        this.Direccion=direccion;
    }
    get nombre(){
        return this.Nombre
    }
    set nombre(nombre){
        this.Nombre=nombre;
    }
    get apellido(){
        return this.Apellido;
    }
    set apellido(apellido){
        this.Apellido=apellido;
    }
    get numero(){
        return this.Numero;
    }
    set numero(numero){
        this.Numero=numero;
    }
    get direccion(){
        return this.Direccion;
    }
    set direccio(direccion){
        this.Direccion=direccion
    }
}