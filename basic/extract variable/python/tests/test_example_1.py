from unittest import TestCase
from src.example_1 import *
from assertpy import assert_that

class TestsExample1(TestCase):
    def test_validar_descuento(self):
        assert_that(calcular_descuento_(100, 10)).is_equal_to(calcular_descuento(100, 10))
