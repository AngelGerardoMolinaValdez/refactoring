/*
Contexto: Estás creando una aplicación de seguimiento de gastos personales.
Tienes una variable intermedia llamada totalGastos que almacena el resultado del cálculo de los gastos mensuales.
*/

const calcularGastosMensuales_ = (
    gastosAlimentacion, gastosTransporte, gastosEntretenimiento) => {
        const totalGastos = gastosAlimentacion + gastosTransporte + gastosEntretenimiento;  // Refactoriza esta variable intermedia
        return totalGastos;
};

const calcularGastosMensuales = (
        gastosAlimentacion, gastosTransporte, gastosEntretenimiento
    ) => gastosAlimentacion + gastosTransporte + gastosEntretenimiento;

module.exports = {calcularGastosMensuales_, calcularGastosMensuales};
