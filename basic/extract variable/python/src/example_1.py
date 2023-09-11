"""
Contexto: Tienes una función en un sistema de compras en línea que calcula el descuento aplicado a un producto. La función recibe el precio original y el porcentaje de descuento como argumentos. Actualmente, la fórmula del descuento se encuentra en línea en el código. Aplica "Extract Variable" para mejorar la legibilidad del código al asignar el valor del descuento a una variable con un nombre descriptivo.
"""

def calcular_descuento_(precio_original, porcentaje_descuento):
    precio_con_descuento = precio_original - (precio_original * (porcentaje_descuento / 100))
    return precio_con_descuento

def calcular_descuento(precio_original, porcentaje_descuento):
    descuento = (precio_original * porcentaje_descuento / 100)
    precio_total = precio_original - descuento
    return precio_total
