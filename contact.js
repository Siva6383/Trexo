// contact.js
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const object = Object.fromEntries(formData); // convert to JSON
  const json = JSON.stringify(object);

  result.style.display = "block";
  result.innerHTML = "Please wait...";

  fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: json
  })
  .then(async response => {
      const data = await response.json();
      if (response.status === 200 && data.success) {
          result.innerHTML = "✅ Form submitted successfully!";
          form.reset();
      } else {
          result.innerHTML = "❌ " + (data.message || "Something went wrong!");
      }
  })
  .catch(error => {
      console.log(error);
      result.innerHTML = "⚠️ Something went wrong!";
  })
  .finally(() => {
      setTimeout(() => { result.style.display = "none"; }, 3000);
  });
});
