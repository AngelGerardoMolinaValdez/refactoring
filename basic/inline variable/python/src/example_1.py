"""
Contexto: Estás desarrollando un programa que calcula el área de un triángulo.
La fórmula para calcular el área es (base * altura) / 2.
Actualmente, tienes una variable intermedia llamada area que almacena el resultado del cálculo del área.
"""

def calcular_area_triangulo_(base: float, altura: float) -> float:
    area = (base * altura) / 2  # Refactoriza esta variable intermedia
    return area

calcular_area_triangulo = lambda base, altura: (base * altura) / 2