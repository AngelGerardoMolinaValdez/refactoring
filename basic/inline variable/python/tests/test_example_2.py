from unittest import TestCase
from assertpy import assert_that
from src.example_2 import *

class TestsExample1(TestCase):
    def test_calculo_promedio(self):
        numeros = [15, 25, 35, 45, 55]
        assert_that(calcular_promedio_(numeros)).is_equal_to(
            calcular_promedio(numeros)
        )

