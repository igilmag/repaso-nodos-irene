
'use strict'

let nombre = document.querySelector('#nombre')
let precio = document.querySelector('#precio')

function getForm() {
  const valorProducto = /^[a-z0-9]+$/i
  const formatoPrecio = /^\d+(\.\d+)?\s?€$/

  if (!valorProducto.test(nombre.value.trim())) {
    alert('solo válidos carácteres alfanuméricos')
    return false
  }

  if (!formatoPrecio.test(precio.value.trim())) {
    alert('formato de precio erróneo')
    return false
  }
  return true
}

document.querySelector('#formulario')
  .addEventListener('submit', (e) => {
    e.preventDefault()
  })

document.querySelector('#cargar')
  .addEventListener('click', () => {
    if (getForm()) {
      document.querySelector('#tbody').innerHTML +=
        `<tr>
    <td>${nombre.value}</td>
    <td>${precio.value}</td>
    </tr>`
    }
  })

