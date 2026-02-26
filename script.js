document.addEventListener('DOMContentLoaded',function(){
  const year = document.getElementById('year')
  if(year) year.textContent = new Date().getFullYear()

  const form = document.getElementById('contactForm')
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault()
      const name = document.getElementById('name').value.trim()
      const email = document.getElementById('email').value.trim()
      const message = document.getElementById('message').value.trim()
      const subject = encodeURIComponent('Portfolio contact from ' + name)
      const body = encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+message)
      window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`
    })
  }
})
