window.onload = function () {

  new WOW({
    animateClass: 'animate__animated',
  }).init();

  $('#order-success').hide();

  $(document).ready(function () {
    $('.card-image').magnificPopup({
      type: 'image',
    })
  })

  $('.fade').slick({
    // dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $("#accordion").accordion();

  let nameOrderInput = $('#nameOrderInput');
  let surnameOrderInput = $('#surnameOrderInput');
  let phoneOrderInput = $('#phoneOrderInput');
  let countryOrderInput = $('#countryOrderInput');
  let indexOrderInput = $('#indexOrderInput');
  let addressOrderInput = $('#addressOrderInput');
  let sentForm = $('#sent-form');
  let orderInputs = $('#order-inputs');



  $(phoneOrderInput).inputmask({"mask": "(99) 999-99-99"});

  sentForm.on("click", function (e) {
    if (!nameOrderInput.val()) {
      alert("Заполните поле имя");
      return false;
    }
    if (!surnameOrderInput.val()) {
      alert("Заполните поле фамилия");
      return false;
    }
    if (!phoneOrderInput.val()) {
      alert("Заполните поле телефон");
      return false;
    }
    if (!countryOrderInput.val()) {
      alert("Заполните поле страна");
      return false;
    }
    if (!indexOrderInput.val()) {
      alert("Заполните поле индекс");
      return false;
    }
    if (indexOrderInput.val().length !== 6) {
      alert("Индекс должен содержать 6 символов");
      return false;
    }
    if (!addressOrderInput.val()) {
      alert("Заполните поле адрес");
      return false;
    }

    $(orderInputs).hide("slow", function () {
      $('#order-success').show();
    });

    e.preventDefault();

  });

}