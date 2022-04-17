const ingresos = [
    new Ingreso('Sueldo', 200.000),
    new Ingreso('Venta de Palet de Estrella 1L', 800),
    new Ingreso('Venta de Pat de Estrella 1L', 800),
    new Ingreso('Venta et de Estrella 1L', 800),
    new Ingreso('Venta de Palet  Estrella 1L', 800),
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
                <ion-icon name="close-circle-outline" alt="Eliminar"></ion-icon>
            </button>
        </div>
    </div>
</div>
`;
return ingresoHTML;
}

//se agrega funcion cargar egresos
const cargarEgresos = (valor)=>{
    let egresosHTML = '';
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }
    console.log(`hola ${egresosHTML}`)
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso)=>{
   let egresoHTML =  `<div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${egreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                        <button class="elemento_eliminar--btn">
                            <ion-icon name="close-circle-outline" alt="Eliminar"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
            `;
            return egresoHTML;
        }