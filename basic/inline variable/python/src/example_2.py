"""
Contexto: Estás construyendo un programa que procesa una lista de números y realiza ciertos cálculos con ellos.
Tienes una variable intermedia llamada promedio que almacena el promedio de la lista de números.
"""
def calcular_promedio_(numeros: list[int | float]) -> int | float:
    suma = sum(numeros)
    cantidad = len(numeros)
    promedio = suma / cantidad  # Refactoriza esta variable intermedia
    return promedio

calcular_promedio = lambda numeros: sum(numeros) / len(numeros)
