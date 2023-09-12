from unittest import TestCase
from assertpy import assert_that
from src.example_2 import calcular_area, GeometricFigures

class TestsExample2(TestCase):
    def test_validar_area_cuadrado(self):
        square = GeometricFigures().create_square(10)
        assert_that(calcular_area(square)).is_equal_to(100)

    def test_validar_area_rectangulo(self):
        rectangle = GeometricFigures().create_rectangle(10, 5)
        assert_that(calcular_area(rectangle)).is_equal_to(50)

    def test_validar_area_triangulo(self):
        triangle = GeometricFigures().create_triangle(2, 10)
        assert_that(calcular_area(triangle)).is_equal_to(10)
