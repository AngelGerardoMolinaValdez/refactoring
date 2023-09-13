from unittest import TestCase
from assertpy import assert_that
from src.example_2 import *

class TestsExample1(TestCase):
    def setUp(self) -> None:
        self.motor_juego = MotorJuego()
    
    def test_validar_carga_recursos(self):
        assert_that(self.motor_juego.cargar_recursos()
                    ).is_equal_to(cargar_recursos())

    def test_validar_actualizacion_logica(self):
        assert_that(self.motor_juego.actualizar_logica()
                    ).is_equal_to(actualizar_logica())

    def test_validar_renderizado_graficos(self):
        assert_that(self.motor_juego.renderizar_graficos()
                    ).is_equal_to(renderizar_graficos())
