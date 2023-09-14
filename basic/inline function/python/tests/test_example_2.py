from unittest import TestCase
from assertpy import assert_that
from src.example_2 import *

class TestsExample2(TestCase):
    def test_validar_conversion_pulgadas_a_centimetros(self):
        assert_that(convertir_pulgadas_a_centimetros(10)
                    ).is_equal_to(conversor_pulgadas_a_centimetors(10))
