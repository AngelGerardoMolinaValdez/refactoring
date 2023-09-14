"""
Contexto: Tienes un conjunto de calificaciones de estudiantes representado como una lista.
Debes calcular el promedio de estas calificaciones. Actualmente, tienes tres funciones separadas para calcular la suma de las calificaciones, contar el número de calificaciones y luego calcular el promedio.
Debes combinar estas tres funciones en una sola función de transformación.
"""
# Función para calcular la suma de calificaciones
def calcular_suma_calificaciones(calificaciones):
    suma = 0
    for calificacion in calificaciones:
        suma += calificacion
    return suma

# Función para contar el número de calificaciones
def contar_calificaciones(calificaciones):
    return len(calificaciones)

# Función para calcular el promedio de calificaciones
def calcular_promedio(calificaciones):
    suma = calcular_suma_calificaciones(calificaciones)
    cantidad = contar_calificaciones(calificaciones)
    promedio = suma / cantidad
    return promedio

class Profesor:
    @staticmethod
    def calcular_promedio(calificaciones: list[float]) -> float:
        sumatoria_total = sum(calificaciones)
        promedio = sumatoria_total / len(calificaciones)
        return promedio
