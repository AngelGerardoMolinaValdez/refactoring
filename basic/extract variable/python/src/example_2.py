"""
Contexto: Estás desarrollando un programa para calcular el promedio de calificaciones de un estudiante en un curso. Tienes una función que recibe una lista de calificaciones y calcula el promedio. Actualmente, la suma de las calificaciones se encuentra en línea en el código. Aplica "Extract Variable" para mejorar la legibilidad del código al asignar la suma de las calificaciones a una variable con un nombre descriptivo.
"""

def calcular_promedio_(calificaciones):
    suma_calificaciones = sum(calificaciones)
    promedio = suma_calificaciones / len(calificaciones)
    return promedio

def calcular_promedio(calificaciones: list[float]):
    suma_calificaciones = sum(calificaciones)
    total_materias = len(calificaciones)
    promedio = suma_calificaciones / total_materias
    return promedio
