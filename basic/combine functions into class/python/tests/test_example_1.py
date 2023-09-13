from unittest import TestCase
from assertpy import assert_that
from src.example_1 import *

class TestsExample1(TestCase):
    def setUp(self) -> None:
        self.facturador = Facturador()
    
    def test_validar_calculo_total(self):
        assert_that(self.facturador.calcular_total(100)
                    ).is_equal_to(calcular_total(100))

    def test_validar_calculo_descuento(self):
        assert_that(self.facturador.aplicar_descuento(100, 10)
                    ).is_equal_to(aplicar_descuento(100, 10))

    def test_validar_calculo_impuestos(self):
        assert_that(self.facturador.calcular_impuestos(100)
                    ).is_equal_to(calcular_impuestos(100))
