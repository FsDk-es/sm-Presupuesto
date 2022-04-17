const ingresos = [
    new Ingreso('Sueldo', 200.000),
    new Ingreso('Venta de Palet de Estrella 1L', 800),
    new Ingreso('Venta de Pat de Estrella 1L', 800),
  //  new Ingreso('Venta et de Estrella 1L', 800),
   // new Ingreso('Venta de Palet  Estrella 1L', 800),
];

const egresos = [
    new Egreso('Renta', 900),
    new Egreso('Atun', 2.50),
    new Egreso('Atun', 2.50),
    new Egreso('Atun', 2.50),
];

let cargarApp = ()=> {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}
let totalIngresos = ()=> {
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = ()=> {
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}
let cargarCabecero = ()=> {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalEgresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}
//se agrega el formato de moneda.
const formatoMoneda = (valor)=>{
return valor.toLocaleString('es-ES',{style:'currency', currency:'EUR', minimumFractionDigits:2});
}

//se agrega el formato de porcentaje.
const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('es-ES', {style:'percent', minimumFractionDigits:2});
}
//se agrega funcion cargar ingresos
const cargarIngresos = (valor)=>{
    let ingresosHTML = '';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso)=>{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elmento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline" alt="Eliminar"
                onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
            </button>
        </div>
    </div>
</div>
`;
return ingresoHTML;
}

const eliminarIngreso = (id)=>{
let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
ingresos.splice(indiceEliminar, 1);
cargarCabecero();
cargarIngresos();

}

//se agrega funcion cargar egresos
const cargarEgresos = (valor)=>{
    let egresosHTML = '';
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }
    //console.log(`hola ${egresosHTML}`)
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso)=>{
   let egresoHTML =  `<div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${egreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                        <button class="elemento_eliminar--btn">
                            <ion-icon name="close-circle-outline" alt="Eliminar" onclick='eliminarEgreso(${egreso.id})'></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
            `;
            return egresoHTML;
        }

        let eliminarEgreso = (id)=> {
            let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
            egresos.splice(indiceEliminar, 1);
            cargarCabecero();
            cargarEgresos();
        }




        let agregarDato = ()=> {
          //  console.log('hola');
            let formulario = document.forms['formulario'];
            let tipo= formulario['tipo'];
            let descripcion = formulario['descripcion']
            let valor = formulario['valor']
            // preguntar si los valores son nuevos
            if(descripcion.value !== '' && valor.value !== ''){
                if(tipo.value === 'ingreso'){
                    //Agregamos 1 ingreso
                   // ingresos.push( new Ingreso(descripcion.value, +valor.value));
                   ingresos.push( new Ingreso(descripcion.value, +valor.value));        
                   cargarCabecero();
                   cargarIngresos();


                }
            else if(tipo.value === 'egreso') {
                //eliminamos 1 ingresoo
                egresos.push( new Egreso(descripcion.value, +valor.value));
                cargarCabecero();
                cargarEgresos();

          }
      }
    }