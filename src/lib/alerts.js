import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Instancia de SweetAlert2 con la identidad de El Plantinar (estilos en styles/forms.css).
const Alert = Swal.mixin({
  buttonsStyling: false,
  customClass: {
    popup: 'ep-alert',
    title: 'ep-alert__title',
    htmlContainer: 'ep-alert__text',
    confirmButton: 'btn btn--primary',
    cancelButton: 'btn btn--ghost',
    actions: 'ep-alert__actions',
  },
  showClass: { popup: 'ep-alert--in' },
  hideClass: { popup: 'ep-alert--out' },
});

export function alertSuccess(title, text) {
  return Alert.fire({ icon: 'success', iconColor: '#4F7A5C', title, text, confirmButtonText: 'Entendido' });
}

export function alertError(title, html) {
  return Alert.fire({ icon: 'error', iconColor: '#B4643F', title, html, confirmButtonText: 'Volver al formulario' });
}

export function alertWarning(title, html) {
  return Alert.fire({ icon: 'warning', iconColor: '#B4643F', title, html, confirmButtonText: 'Revisar' });
}

export function showLoading(title) {
  Alert.fire({ title, allowOutsideClick: false, allowEscapeKey: false, didOpen: () => Swal.showLoading() });
}
