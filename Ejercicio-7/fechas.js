const fecha_hoy = new Date();
console.log(fecha_hoy);

const fecha_nacimiento = new Date(1987,3,23);
console.log(fecha_nacimiento);

const fecha_comparacion = fecha_hoy > fecha_nacimiento;
console.log(fecha_comparacion);

const dia_nacimiento = fecha_nacimiento.getDate();
console.log(dia_nacimiento);

const mes_nacimiento = fecha_nacimiento.getMonth() + 1;
console.log(mes_nacimiento);

const año_nacimiento = fecha_nacimiento.getFullYear();
console.log(año_nacimiento);
