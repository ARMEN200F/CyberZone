// Учебная форма на странице «Фишинг»: ничего не отправляет и не сохраняет,
// а только показывает предупреждение.
const form = document.querySelector('#demo-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.querySelector('#warning').hidden = false;
    form.reset();
  });
}