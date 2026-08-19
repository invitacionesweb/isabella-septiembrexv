const scriptUrl = 'https://script.google.com/macros/s/AKfycbyc7v1BuJVNuea6jVEJd9dP9nM8XPn7MW-EAarqBCtP5tEgS_hT_0MTyF79h_T9jlQtJw/exec';
const form = document.forms['asistenciaform'];

form.addEventListener('submit', e => {
  e.preventDefault();

  Swal.fire({
    title: 'Enviando...',
    text: 'Por favor, esperá un momento',
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading()
  });

  fetch(scriptUrl, { method: 'POST', body: new FormData(form) })
    .then(res => {
      if (!res.ok) throw new Error('Error de red');
      Swal.fire('¡MUCHAS GRACIAS!', 'Formulario enviado', 'success');
    })
    .then(() => setTimeout(() => location.reload(), 1500))
    .catch(() =>
      Swal.fire('Error', 'No se pudo enviar el formulario', 'error')
    );
});