"""
Ejercicio 2: Cálculo de Área de una Figura Geométrica

Contexto: Estás desarrollando una aplicación de geometría. Tienes una función llamada calcular_area que recibe la longitud y la altura de una figura geométrica y calcula su área. Actualmente, la función está diseñada solo para calcular el área de rectángulos. Aplica "Change Function Declaration" para permitir que la función calcule el área de diferentes tipos de figuras geométricas, como rectángulos, triángulos, círculos, etc.
"""
from abc import abstractmethod, ABC
def calcular_area_(longitud, altura):
    # Calcular el área de un rectángulo aquí
    area = longitud * altura
    return area

class GeometricFigure(ABC):
    def area(self) -> float:
        pass

class AbstractFactoryGeometricFigure(ABC):
    def create_square(self, *args) -> GeometricFigure:
        pass

    def create_rectangle(self, *args) -> GeometricFigure:
        pass

    def create_triangle(self, *args) -> GeometricFigure:
        pass

class Square(GeometricFigure):
    _side: float

    def __init__(self, side: float) -> None:
        self._side = side

    def area(self) -> float:
        return self._side * self._side

class Rectangle(GeometricFigure):
    _vertical_side: float
    _horizontal_side: float

    def __init__(self, vertical_side: float, horizontal_side: float) -> None:
        self._vertical_side = vertical_side
        self._horizontal_side = horizontal_side

    def area(self) -> float:
        return self._vertical_side * self._horizontal_side

class Triangle(GeometricFigure):
    _base: float
    _height: float

    def __init__(self, base: float, height: float) -> None:
        self._base = base
        self._height = height

    def area(self) -> float:
        return (self._base * self._height) / 2

class GeometricFigures(AbstractFactoryGeometricFigure):
    def create_square(self, *args) -> GeometricFigure:
        return Square(*args)

    def create_rectangle(self, *args) -> GeometricFigure:
        return Rectangle(*args)

    def create_triangle(self, *args) -> GeometricFigure:
        return Triangle(*args)

def calcular_area(figura: GeometricFigure) -> float:
    return figura.area()
