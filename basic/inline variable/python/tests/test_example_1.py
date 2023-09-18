from unittest import TestCase
from assertpy import assert_that
from src.example_1 import *

class TestsExample1(TestCase):
    def test_calculo_triangulo(self):
        assert_that(
            calcular_area_triangulo_(10, 2)).is_equal_to(calcular_area_triangulo(10, 2))
