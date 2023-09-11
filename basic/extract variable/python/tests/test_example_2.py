from unittest import TestCase
from assertpy import assert_that
from src.example_2 import *

class TestsExample2:
    def test_validar_calificaciones(self):
        calificaciones = [10, 7, 7, 8, 9]
        assert_that(calcular_promedio_(calificaciones)).is_equal_to(calcular_promedio(calificaciones))
