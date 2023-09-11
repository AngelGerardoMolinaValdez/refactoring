# ***Definición***

El refactoring "Extract Variable" es una técnica utilizada en el desarrollo de software para mejorar la legibilidad y mantenibilidad del código al descomponer expresiones complicadas o repetitivas en variables con nombres descriptivos. El objetivo principal es hacer que el código sea más claro y comprensible al asignar nombres significativos a valores intermedios o resultados de cálculos.

Aquí están los pasos típicos para aplicar el refactoring "Extract Variable":

1. **Identificar una expresión complicada o repetitiva**: Encuentra una parte del código donde tengas una expresión larga o confusa que se use más de una vez en tu función o método.

2. **Seleccionar la expresión y asignarla a una variable**: Crea una nueva variable y asigna la expresión a esa variable. Asegúrate de darle un nombre descriptivo que refleje el propósito de la expresión.

3. **Reemplazar todas las instancias de la expresión**: Reemplaza todas las instancias de la expresión original en el código con la variable que has creado en el paso anterior.

4. **Asegurarte de que el código siga funcionando correctamente**: Verifica que el código siga funcionando de la misma manera después de realizar el cambio. A menudo, esto implica ejecutar pruebas para asegurarte de que no hay cambios en el comportamiento.

Aquí hay un ejemplo en Python para ilustrar el refactoring "Extract Variable":

Supongamos que tienes la siguiente expresión en tu código:

```python
total = precio_producto * cantidad - (precio_producto * cantidad * descuento)
```

Esta expresión realiza un cálculo para obtener el total de una compra, teniendo en cuenta el precio del producto, la cantidad y un descuento. Es difícil de entender a simple vista.

Aplicando "Extract Variable", puedes mejorar la legibilidad del código de la siguiente manera:

```python
precio_sin_descuento = precio_producto * cantidad
total = precio_sin_descuento - (precio_sin_descuento * descuento)
```

En este ejemplo, hemos creado la variable `precio_sin_descuento` para representar la parte del cálculo que no tiene en cuenta el descuento. Esto hace que el código sea más claro y más fácil de entender, ya que ahora podemos ver claramente qué está sucediendo en cada paso del cálculo.

El refactoring "Extract Variable" es una práctica importante para mejorar la calidad del código al hacerlo más claro y legible, lo que facilita el mantenimiento y la colaboración en el desarrollo de software.


# ***Referencias***
[refactoring.com](https://refactoring.com/catalog/extractVariable.html)