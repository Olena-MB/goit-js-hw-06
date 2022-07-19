const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please, fill in all the fields!");
  }
    const formData = new FormData(event.currentTarget);
    const formValue = {};

    formData.forEach((value, name) => {
    formValue[name] = value;
    })
  console.log(formValue);
  event.currentTarget.reset();
})
