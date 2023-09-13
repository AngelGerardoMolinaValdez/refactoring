"""
Contexto: Estás desarrollando un sistema de facturación para una tienda en línea. Tienes varias funciones que calculan el total de una factura, aplican descuentos y calculan impuestos. Aplica "Combine Functions into Class" para agrupar estas funciones relacionadas en una clase llamada Facturador.
"""
def calcular_total(subtotal):
    # Calcular el total de la factura
    total = subtotal + calcular_impuestos(subtotal)
    return total

def calcular_impuestos(subtotal):
    # Calcular impuestos sobre el subtotal
    impuestos = subtotal * 0.15  # Ejemplo de cálculo de impuestos
    return impuestos

def aplicar_descuento(total, descuento):
    # Aplicar un descuento al total de la factura
    total_con_descuento = total - descuento
    return total_con_descuento

class Facturador:
    def calcular_total(self, subtotal):
        # Calcular el total de la factura
        total = subtotal + self.calcular_impuestos(subtotal)
        return total

    def calcular_impuestos(self, subtotal):
        # Calcular impuestos sobre el subtotal
        impuestos = subtotal * 0.15  # Ejemplo de cálculo de impuestos
        return impuestos

    def aplicar_descuento(self, total, descuento):
        # Aplicar un descuento al total de la factura
        total_con_descuento = total - descuento
        return total_con_descuento
