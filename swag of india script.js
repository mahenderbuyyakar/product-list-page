// Changing Country flag and contact number

document.getElementById('language-select').addEventListener('change', changeFunc);

function changeFunc() {
    var selectBox = document.getElementById('language-select');
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue == 'India') {
        document.getElementById('flag-icon').src =
            'https://raw.githubusercontent.com/mahenderbuyyakar/PNG-images/main/langicon.png';
        document.getElementById('contact-number').innerHTML = '+91 9838203708';
    } else if (selectedValue == 'UK') {
        document.getElementById('flag-icon').src =
            'https://raw.githubusercontent.com/mahenderbuyyakar/PNG-images/main/Group%202560.png';
        document.getElementById('contact-number').innerHTML = '+44 1632 960846';
    } else if (selectedValue == 'Germany') {
        document.getElementById('flag-icon').src =
            'https://raw.githubusercontent.com/mahenderbuyyakar/PNG-images/main/germany.png';
        document.getElementById('contact-number').innerHTML = '+1 202 555 0156';
    } else {
        document.getElementById('flag-icon').src =
            'https://raw.githubusercontent.com/mahenderbuyyakar/PNG-images/main/france.png';
        document.getElementById('contact-number').innerHTML = '+49-163-5556-667';
    };
}





// // Scroll to Top 

document.getElementById('scroll-btn').classList.add("hide");
getYPosition = () => {
    var top = window.pageYOffset || document.documentElement.scrollTop
    return top;
};

document.addEventListener('scroll', () => {
    var scroll = getYPosition();
    var arrow = document.getElementById('scroll-btn');
    scrolled = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
    if (scroll > 300) {
        arrow.classList.remove("hide");
        arrow.classList.add("show");
        arrow.addEventListener('click', scrolled);
    } else {
        document.getElementById('scroll-btn').classList.remove("show");
        document.getElementById('scroll-btn').classList.add("hide");
        document.getElementById('scroll-btn').removeEventListener("click", scrolled);
    }
})




// Adding the sticky navbar
window.onscroll = () => {
    myFunction1(), show_scroller();
};
var navbar = document.getElementById("sticky-section");
var sticky = navbar.offsetTop;

function myFunction1() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        navbar.classList.add("sticky-shadow");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("sticky-shadow");
    }
}


// Accordion plus and minus tabs in FAQ page

$(document).ready(function () {
    //toggle the component with class accordion_body
    $(".accordion_head").click(function () {
        if ($('.accordion_body').is(':visible')) {
            $(".accordion_body").slideUp(300);
            $(".plusminus").text('+');
        }
        if ($(this).next(".accordion_body").is(':visible')) {
            $(this).next(".accordion_body").slideUp(300);
            $(this).children(".plusminus").text('+');
        } else {
            $(this).next(".accordion_body").slideDown(300);
            $(this).children(".plusminus").text('-');
        }
    });
});



// show icons upon hover of products
document.querySelectorAll(".prod-card").forEach(card => {
    card.children[0].style.visibility = 'hidden';
  })
  
  document.querySelectorAll(".prod-card").forEach(card => {
    card.addEventListener('mouseover', func => {
      card.children[1].style.opacity = 0.2;
      card.children[0].style.visibility = 'visible';
    })
  })
  
  document.querySelectorAll(".prod-card").forEach(card => {
    card.addEventListener('mouseout', func => {
      card.children[1].style.opacity = 1;
      card.children[0].style.visibility = 'hidden';
    })
  })
  
  //  icons change color on hover of products
  // Heart icon
  document.querySelectorAll(".prod-card").forEach(img => {
    let img_1 = img.childNodes[1].childNodes[1].childNodes[0]
    img_1.addEventListener('mouseover', func2 => {
      img_1.src = 'png images/heart icon.png';
    })
  });
  document.querySelectorAll(".prod-card").forEach(img => {
    let img_1 = img.childNodes[1].childNodes[1].childNodes[0]
    img_1.addEventListener('mouseout', func2 => {
      img_1.src = 'png images/heart-icon-trans.png';
    })
  });
  // Eye icon
  document.querySelectorAll(".prod-card").forEach(img => {
    let img_2 = img.childNodes[1].childNodes[3].childNodes[0]
    img_2.addEventListener('mouseover', func3 => {
      img_2.src = 'png images/eye icon.png';
    })
  });
  document.querySelectorAll(".prod-card").forEach(img => {
    let img_2 = img.childNodes[1].childNodes[3].childNodes[0]
    img_2.addEventListener('mouseout', func3 => {
      img_2.src = 'png images/eye-icon-trans.png';
    })
  });
  // Cart icon
  document.querySelectorAll(".prod-card").forEach(img => {
    let img_3 = img.childNodes[1].childNodes[5].childNodes[0]
    img_3.addEventListener('mouseover', func4 => {
      img_3.src = 'png images/shopping icon.png';
    })
  });
  document.querySelectorAll(".prod-card").forEach(img => {
    let img_3 = img.childNodes[1].childNodes[5].childNodes[0]
    img_3.addEventListener('mouseout', func4 => {
      img_3.src = 'png images/shopping-icon-trans.png';
    })
  });


  