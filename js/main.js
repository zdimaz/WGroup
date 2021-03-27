;(function () {

  'use strict';

/* 
  DOM CONTENT LOADED
*/

  document.addEventListener("DOMContentLoaded", function() {

    /* vue */
    Vue.component('v-select', VueSelect.VueSelect)
    
    new Vue({
      el: '#app',
      data: {
        options: [
          'Back End',
          'Front end',
          'Designer'
        ]
      }
    });
    /* vue */

    /* language */
    document.querySelector('.header_language_btn').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(".header_language").classList.toggle("active");
    });
    /* language */

    /* contacs */
    document.querySelector('.header_tel_btn').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(".header_tel_wrapp").classList.toggle("active");
    });
    /* contacs */

  });

/* 
  END OF DOM CONTENT LOADED
*/

}());