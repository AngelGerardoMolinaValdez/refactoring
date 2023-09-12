"""
Contexto: Estás desarrollando una aplicación de conversión de moneda. Tienes una función llamada convertir_dólares_a_euros que recibe una cantidad en dólares y realiza la conversión a euros. Actualmente, la fórmula de conversión se encuentra directamente en el cuerpo de la función. Aplica "Change Function Declaration" para mejorar la flexibilidad de la función permitiendo la conversión entre diferentes monedas, no solo dólares a euros.
"""
from enum import Enum

class ConversionesDolares(Enum):
    """conversiones de dólares a diferentes monedas.
    Cada cantidad representa el valor de 1 dólar a la moneda indicada
    """
    EUROS = 0.93
    PESOS = 17.49

class ConversionesPesosMexicanos(Enum):
    """conversiones de pesos mexicanos a diferentes monedas.
    Cada cantidad representa el valor de 1 peso mexicano a la moneda indicada
    """
    EUROS = 0.053
    DOLARES = 0.057

class ConversionesEuros(Enum):
    """conversiones de euros a diferentes monedas.
    Cada cantidad representa el valor de 1 euro a la moneda indicada
    """
    PESOS = 18.78
    DOLARES = 1.07

CONVERSIONES = {
    "pesos": ConversionesPesosMexicanos,
    "euros": ConversionesEuros,
    "dolares": ConversionesDolares
}

def convertir_dolares_a_euros(dolares):
    # Realizar la conversión de dólares a euros aquí
    euros = dolares * 0.85
    return euros

def conversion_divisas(
        cantidad: float | int,
        tipo_moneda: str,
        tipo_conversion: str) -> float:
    conversiones_de_canje: Enum = CONVERSIONES.get(tipo_conversion)
    conversiones_de_moneda: Enum = CONVERSIONES.get(tipo_moneda)

    if not all([conversiones_de_canje, conversiones_de_moneda]):
        raise Exception(
            "la moneda actual/canje no fue especificada correctamente")
    valor_moneda_conversion: float = conversiones_de_canje[
        tipo_moneda.upper()].value
    return cantidad * valor_moneda_conversion
