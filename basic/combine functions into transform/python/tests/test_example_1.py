from unittest import TestCase
from assertpy import assert_that
from src.example_1 import calcular_promedio, Profesor

class TestsExample1(TestCase):
    def test_validar_calificaciones(self):
        calificaciones = (8, 9, 10, 7, 9)
        assert_that(calcular_promedio(calificaciones)
                    ).is_equal_to(Profesor.calcular_promedio(calificaciones))
