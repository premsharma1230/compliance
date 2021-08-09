$(document).ready(function(){
    
    // $("nav h2").click(function(){
    //   $("nav h2").css("background-color", "yellow");
    // });

   $('.profile-wrapper').click(function (){
    //  console.log('.profile-wrapper')
      $('.credential-Wrapper').slideToggle('fast');

   })
   $('.main-bar').click(function(){
    $(this).toggleClass("Active-Menu");
   })
  // add & Remove class
  $(".modal-title").click(function () {
    if(!$(this).hasClass('active-Steps'))
    {    
        $(".modal-title.active-Steps").removeClass("active-Steps");
         $(".modal-title.active-Steps").css("transition","all .4s ease-in-out");
        $(this).addClass("active-Steps");  
        $(this).css("transition","all .4s ease-in-out");      
    }
  });

  
   // add & Remove class

   $(".pattern_btn").click(function () {
    if(!$(this).hasClass('active-btn'))
    {    
        $(".pattern_btn.active-btn").removeClass("active-btn");
         $(".pattern_btn.active-btn").css("transition","all .4s ease-in-out");
        $(this).addClass("active-btn");  
        $(this).css("transition","all .4s ease-in-out");      
    }
  });
 

  $(".Table_wrapper tbody tr").dblclick  (function () {
    // debugger
    $('#EditComTypMaster').modal('toggle');
    console.log(EditComTypMaster)
  })

// -----Toool---Tips-----// 
// $('[data-toggle="tooltip"]').tooltip();

// --------------year--picker
// $(function() {  
//   $('.yearpicker').yearpicker();
// });

 



// $("#datepicker").datepicker({
//   format: "yyyy",
//   viewMode: "years", 
//   minViewMode: "years"
// });


  });

// ------>

function openBasicItem(ListName) {
  var i;
  var x = document.getElementsByClassName("Tab_Wrapper");
  // console.log(openBasicItem);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(ListName).style.display = "block";  
}


// -------->

// ------>

function openPattern(ListName) {
  var i;
  var x = document.getElementsByClassName("pattern-cmn01");
  // console.log(openPattern);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(ListName).style.display = "block";  
}


// -------->


// --<<<<<<<<<<<<<<------Form-Validation-------------->>>>>>>>>>

 // (function () {
//   'use strict'

 
//   var forms = document.querySelectorAll('.needs-validation')

//   // Loop over them and prevent submission
//   Array.prototype.slice.call(forms)
//     .forEach(function (form) {
//       form.addEventListener('submit', function (event) {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }

//         form.classList.add('was-validated')
//       }, false)
//     })
// })()

// --<<<<<<<<<<<<<<------Form-Validation-------------->>>>>>>>>>


















  // var currentTab = 0;
  // showTab(currentTab);

  // function showTab(n) { 
  //     var x = document.getElementsByClassName("Tab_Wrapper");
  //     x[n].style.display = "block"; 
  //     if (n == 0) {
  //         document.getElementById("prevBtn").style.display = "none";
  //     } else {
  //         document.getElementById("prevBtn").style.display = "inline";
  //     }
  //     if (n == (x.length - 1)) {
  //         document.getElementById("nextBtn").innerHTML = "Submit";
  //     } else {
  //         document.getElementById("nextBtn").innerHTML = "Next";
  //     } 
  //     fixStepIndicator(n)
  // }

  // function nextPrev(n) { 
  //     var x = document.getElementsByClassName("Tab_Wrapper"); 
  //     if (n == 1 && validateForm()) return false; 
  //     x[currentTab].style.display = "none"; 
  //     currentTab = currentTab + n; 
  //     if (currentTab >= x.length) { 
  //         document.getElementById("registerForm").submit();
  //         return false;
  //     } 
  //     showTab(currentTab);
  // }

  // function validateForm() { 
  //     var x, y, i, valid = true;
  //     x = document.getElementsByClassName("Tab_Wrapper");
  //     y = x[currentTab].getElementsByClassName("form-control"); 
  //     for (i = 0; i < y.length; i++) { 
  //         if (y[i].value == "") { 
  //             y[i].className += " invalid"; 
  //             valid = false;
  //         }
  //     } 
  //     if (valid) {
  //         document.getElementsByClassName("step")[currentTab].className += " finish";
  //     }
  //     return valid;  
  // }

  // function fixStepIndicator(n) { 
  //     var i, x = document.getElementsByClassName("step");
  //     for (i = 0; i < x.length; i++) {
  //         x[i].className = x[i].className.replace(" active-Steps", "");
  //     } 
  //     x[n].className += " active-Steps";
  // }



//   $(document).ready(function(){

//     $('.yearpicker').yearpicker({
//       // Auto Hide
//       autoHide: true,

//       // Initial Year
//       year: null,

//       // Start Year
//       startYear: null,

//       // End Year
//       endYear: null,

//       // Element tag
//       itemTag: 'li',

//       // Default CSS classes
//       selectedClass: 'selected',
//       disabledClass: 'disabled',
//       hideClass: 'hide',
//       highlightedClass: 'highlighted',

//       // Custom template
//       template: `<div class="yearpicker-container">
//                   <div class="yearpicker-header">
//                       <div class="yearpicker-prev" data-view="yearpicker-prev">&lsaquo;</div>
//                       <div class="yearpicker-current" data-view="yearpicker-current">SelectedYear</div>
//                       <div class="yearpicker-next" data-view="yearpicker-next">&rsaquo;</div>
//                   </div>
//                   <div class="yearpicker-body">
//                       <ul class="yearpicker-year" data-view="years">
//                       </ul>
//                   </div>
//               </div>`
//     });
// });