function Auto(marca,modelo,color,anio,km,precio,cuotas,patente,vendido){
    this.marca=marca;
    this.modelo=modelo;
    this.color=color;
    this.anio=anio;
    this.km=km;
    this.precio=precio;
    this.cuotas=cuotas;
    this.patente=patente;
    this.vendido=vendido;
}

let auto1 = new Auto("Ford","Fiesta","Azul",2019,200,150000,12,"APL123",false);
let auto2 = new Auto("Toyota","Corolla","Blanco",2019,0,100000,14,"JJH116",false)

let autos = [
    auto1,auto2
    ]
//----------------------------------------------------------

let concesionaria = {

    autos : autos, 
    buscarAuto: function(patenteBuscada){
        let autoEncontrado=null;
        this.autos.filter( auto => auto.patente==patenteBuscada ? autoEncontrado=auto : "");
       
        return autoEncontrado;
    },

    venderAuto: function(patenteBuscada){
        autoAVender = this.buscarAuto(patenteBuscada);
        autoAvender = concesionaria.autos.find(elemento=> {
            return elemento.patente === patenteBuscada
        })
        autoAVender.vendido=true;
        
        return autoAVender;
    },

    autosParaLaVenta: function(){
        let arrayVendibles = this.autos.filter(auto => auto.vendido==false)
           
        return arrayVendibles
    },

   autosNuevos: function(){
       let autos0km = [];
       this.autosParaLaVenta().forEach(element => {
           element.km<100 ? autos0km.push(element): ""
       });
       return autos0km;
   }
}



