document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slides img");
  let index = 0;

  function showSlide() {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? "1" : "0";
    });

    index = (index + 1) % slides.length;
  }

  setInterval(showSlide, 3000);

  window.validasiForm = function () {
    let nama = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let destinasi = document.getElementById("destination").value;

    if (!nama) return alert("Harap masukkan nama Anda.");
    if (!email) return alert("Harap masukkan email yang valid.");
    if (!destinasi) return alert("Harap pilih destinasi wisata.");

    alert("Formulir berhasil dikirim!");
    document.getElementById("contact-form").reset();
  };
});
