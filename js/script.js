
AOS.init({
  duration: 1000
});

function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}


window.onscroll = function () {
  progressBarScroll();
};



$(document).ready(preloderFunction());
    
function preloderFunction() {
  
    setTimeout(function() {
        document.getElementById("page-top").scrollIntoView();
        
        $('#ctn-preloader').addClass('loaded');  
        $('body').removeClass('no-scroll-y');

        if ($('#ctn-preloader').hasClass('loaded')) {
          $(this).delay(2000).fadeOut();
        }
    }, 1000);
}



function afterLoad() {
}





$(function ($) {
  $(".mobile_btn").on("click", function () {
    $(".main_menu").slideToggle();
    $(".mobile_btn i").toggleClass("fa-xmark fa-xl");
  });

  if ($(window).width() < 768) {
    $(".main_menu  ul li a").on("click", function () {
      $(this)
        .parent(".has_dropdown")
        .children(".sub_menu")
        .css({ "padding-left": "15px" })
        .stop()
        .slideToggle();

      $(this)
        .parent(".has_dropdown")
        .children("a")
        .find(".fa-angle-right")
        .stop()
        .toggleClass("fa-rotate-90");
    });
  }
});







// var currentText = ""; // تخزين النص الحالي

// function updateImageWithText(event) {
//     var textInput = event.target.value;
    
//     if (event.inputType === 'insertText' && event.data === ' ') {
//         // تم إضافة مسافة، لذلك نقوم بإضافة النص الحالي إلى الصورة
//         currentText += ' ';
//     } else if (event.inputType === 'deleteContentBackward') {
//         // تم مسح محتوى إلى الوراء، لذلك نقوم بحذف الحرف الأخير من النص الحالي
//         currentText = currentText.slice(0, -1);
//     } else if (event.inputType === 'insertText' && event.data.match(/[a-zA-Z0-9]/)) {
//         // تم إضافة حرف أو رقم، لذلك نقوم بإضافته إلى النص الحالي
//         currentText += event.data;
//     }
    
//     // احصل على الصورة
//     var image = document.getElementById("image");
  
//     // إنشاء عنصر canvas للرسم على الصورة
//     var canvas = document.createElement("canvas");
//     canvas.width = image.width;
//     canvas.height = image.height;
//     var context = canvas.getContext("2d");
  
//     // قم برسم الصورة على العنصر canvas
//     context.drawImage(image, 0, 0);
  
//     // ضع النص على العنصر canvas
//     context.font = "30px Arial";
//     context.fillStyle = "white"; // لون النص
//     context.fillText(currentText, 50, 50); // تعديل الموقع ونص النص
  
//     // عرض العنصر canvas على الصورة
//     image.src = canvas.toDataURL();
// }



// function downloadImageWithText() {
//   // احصل على النص الذي تم إدخاله في الحقل النصي
//   var textInput = document.getElementById("textInput").value;

//   // احصل على الصورة
//   var image = document.getElementById("image");

//   // إنشاء عنصر canvas للرسم على الصورة
//   var canvas = document.createElement("canvas");
//   canvas.width = image.width;
//   canvas.height = image.height;
//   var context = canvas.getContext("2d");

//   // قم برسم الصورة على العنصر canvas
//   context.drawImage(image, 0, 0);

//   // ضع النص على العنصر canvas
//   context.font = "30px Arial";
//   context.fillStyle = "white"; // لون النص
//   context.fillText(textInput, 50, 50); // تعديل الموقع ونص النص

//   // قم بتحميل الصورة بالكامل مع النص
//   var downloadLink = document.createElement("a");
//   downloadLink.href = canvas.toDataURL(); // تحويل العنصر canvas إلى URL
//   downloadLink.download = "image_with_text.png"; // اسم الملف الذي سيتم تنزيله
//   downloadLink.click();
// }                                      



var backgroundMusic = document.querySelectorAll(".input_g");

    function playMusic() {
      backgroundMusic.play();
    }

    function pauseMusic() {
      backgroundMusic.pause();
    }






















function updateHeaderText(inputNumber) {
  var header = document.getElementById(`headerText${inputNumber}`);
  var textInput = document.getElementById(`textInput${inputNumber}`);
  header.textContent = textInput.value;
}

function downloadImageWithText() {
  const imageContainer = document.getElementById("image-container");

  // إنشاء كانفاس للصورة والنص
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // تعيين أبعاد الكانفاس لتناسب الصورة
  canvas.width = imageContainer.offsetWidth;
  canvas.height = imageContainer.offsetHeight;

  // رسم الصورة على الكانفاس
  const image = document.getElementById("image");
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  // رسم النص على الكانفاس (لكل input)
  const textPositions = [
    { top: 33, right: 65 },
    { top: 40, right: 65 },
  ];

  for (let i = 0; i < 2; i++) {
    const textInput = document.getElementById(`textInput${i + 1}`);
    ctx.fillStyle = "#000"; // لون خلفية النص
    ctx.font = "24px cairo"; // حجم ونوع الخط
    const x = canvas.width * (textPositions[i].right / 100);
    const y = canvas.height * (textPositions[i].top / 100);
    ctx.fillText(textInput.value, x, y); 
  }

  // تحويل الكانفاس إلى ملف صورة
  const dataURL = canvas.toDataURL("image/png");

  // إنشاء عنصر رابط لتنزيل الصورة
  const a = document.createElement("a");
  a.href = dataURL;
  a.download = "image_with_text.png"; // اسم الملف
  a.click();
}
