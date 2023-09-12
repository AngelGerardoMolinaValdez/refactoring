from unittest import TestCase, expectedFailure
from assertpy import assert_that
from src.example_1 import conversion_divisas

class TestsExample1(TestCase):
    def test_validar_conversion_dolar_a_euro(self):
        total_euros: float = conversion_divisas(10, "dolares", "euros")
        assert_that(total_euros, 9.32)

    def test_validar_conversion_dolar_a_pesos(self):
        total_pesos: float = conversion_divisas(10, "dolares", "pesos")
        assert_that(total_pesos, 174.70)

    @expectedFailure
    def test_validar_conversion_con_monedas_erronea(self):
        total_pesos: float = conversion_divisas(10, "yen", "pesos")
        assert_that(total_pesos, 174.70)

    @expectedFailure
    def test_validar_conversion_con_monedas_de_conversion_erronea(self):
        total_pesos: float = conversion_divisas(10, "dolares", "pesos argentinos")
        assert_that(total_pesos, 174.70)
