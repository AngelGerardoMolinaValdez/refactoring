"""
Contexto: Tienes una función llamada calcularAreaCirculo que toma el radio de un círculo como argumento y devuelve el área del círculo. Esta función se considera innecesaria y debe refactorizarse para eliminarla.
"""
def calcular_area_circulo(radio):
    area = 3.14159265359 * (radio ** 2)
    return area

area_circulo = lambda radio: 3.14159265359 * (radio ** 2)
