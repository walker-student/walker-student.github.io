const scriptURL = 'https://script.google.com/macros/s/AKfycbxvcalqAd3PPmMWDnI9U4Y-7mBCM654KasGmnAPGlmHysrLb4N1S78YrLsXuIOEh5w4tw/exec'

const form = document.forms['EasyCritic']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(_response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})