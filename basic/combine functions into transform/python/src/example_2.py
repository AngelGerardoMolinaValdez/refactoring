"""
Contexto: Tienes un texto en formato no normalizado con letras mayúsculas y minúsculas mixtas.
Debes normalizar el texto convirtiendo todas las letras a minúsculas.
Actualmente, tienes una función que convierte una letra a minúscula y otra función que aplica esta conversión a todo el texto.
Debes combinar estas dos funciones en una sola función de transformación.
"""
# Función para convertir una letra a minúscula
def convertir_a_minuscula(letra):
    return letra.lower()

# Función para normalizar un texto completo
def normalizar_texto(texto):
    texto_normalizado = ""
    for letra in texto:
        texto_normalizado += convertir_a_minuscula(letra)
    return texto_normalizado

class String:
    @staticmethod
    def normalize_to_lowercase(text: str):
        return text.lower()