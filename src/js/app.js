const ingresos = [
    new Ingreso('Sueldo', 2000.000),
    new Ingreso('Venta de Palet de Estrella 1L', 800)
];

const egresos = [
    new Egreso('Renta', 900),
    new Egreso('Atun', 2.50)
];

let cargarApp = ()=> {
    cargarCabecero();
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
    document.getElementById('porcentaje').innerHTML = porcentajeEgreso;
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}
const formatoMoneda = (valor)=>{
return valor.toLocaleString('es-ES',{style:'currency', currency:'EUR', minimumFractionDigits:2});
}