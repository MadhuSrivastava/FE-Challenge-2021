$(document).ready(function () {

    $("#btn-search-phone").on("click", function (e) {
      e.preventDefault();
      localStorage.clear(); //Clears storage for next request
      var phone = $('#phone1').val();
      
  
      var y;
      phoneregEx = /^[0-9]{10}$/;
      
      if (phone.match(phoneregEx)) {
        y = true;
      } else {
        y = false; 
      }
  
      if (y === true) {
        document.querySelector('input[type="text"]').parentNode.classList.remove("error");
        const proxyurl = "";
        const url =
          'https://ltv-data-api.herokuapp.com/api/v1/records.json?phone=' + phone;
        fetch(proxyurl + url)
          .then((response) => response.text())
          .then(function (contents) {
            localStorage.setItem("userObject", contents);
            window.location.href = "result.html";
          })
          .catch((e) => console.log(e));
      } else if (y !== true) {
        document.querySelector('#phone1').parentNode.classList.add("error");
      }
    });
  
    $('input[type="text"]').keypress(function (event) {
      phone = $('#phone1').val();
      phoneregEx = /^[0-9]{10}$/;
      if (phone.match(phoneregEx)) {
        y = true;
        document.querySelector('input[type="text"]').parentNode.classList.remove("error");
      } else {
        y = false;
      }
      keycode = (event.keyCode ? event.keyCode : event.which);
      if (keycode == '13') {
        /**
         * Makes a request to ltv API to search an specific Phone numbers.
         * If there's a response, it gets stored in the local storage and redirects to results page
         */
        event.preventDefault();
        localStorage.clear(); //Clears storage for next request
  
        var y;
  
  
        if (y === true) {
          const proxyurl = "";
          const url =
            'https://ltv-data-api.herokuapp.com/api/v1/records.json?phone=' + phone;
          fetch(proxyurl + url)
            .then((response) => response.text())
            .then(function (contents) {
              localStorage.setItem("userObject", contents);
              window.location.href = "result.html";
            })
            .catch((e) => console.log(e));
        } else if (y !== true) {
          document.querySelector('input[type="text"]').parentNode.classList.add("error");
        }
      }
    });
  
  });
  