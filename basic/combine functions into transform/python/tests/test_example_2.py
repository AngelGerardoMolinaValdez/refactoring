from unittest import TestCase
from assertpy import assert_that
from src.example_2 import normalizar_texto, String

class TestsExample2(TestCase):
    def test_validar_texto_normalizado_a_minusculas(self):
        texto = "Hola Python!"
        assert_that(normalizar_texto(texto)
                    ).is_equal_to(String.normalize_to_lowercase(texto))
