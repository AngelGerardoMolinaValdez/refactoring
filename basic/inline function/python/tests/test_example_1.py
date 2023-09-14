from unittest import TestCase
from assertpy import assert_that
from src.example_1 import *

class TestsExample1(TestCase):
    def test_validar_area_circulo(self):
        assert_that(calcular_area_circulo(10)).is_equal_to(area_circulo(10))
