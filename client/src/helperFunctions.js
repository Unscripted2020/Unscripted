import $ from 'jquery';
export function initalize(){
  let courses = [0, 1, 2];

  $(document).ready(function(){
      $("#loginButton").click(function(){
          $("#loginModal").modal('show');
      });
      $("#loginClose").click(function(){
          $("#loginModal").modal('hide');
      });
      $("#loginCancel").click(function(){
          $("#loginModal").modal('hide');
      });
      $("#formButton").click(function(){
          $("#formModal").modal('show');
      });
      $("#formClose").click(function(){
          $("#formModal").modal('hide');
      });
      $("#formCancel").click(function(){
          $("#formModal").modal('hide');
      });
      $("#course-1-close").click(function(){
          $("#course-1").addClass('d-none');
      });
      $("#course-2-close").click(function(){
          $("#course-2").addClass('d-none');
      });
      $("#course-3-close").click(function(){
          $("#course-3").addClass('d-none');
      });
      $("#search-button").click(function(){

      });
      $("#mycarousel").carousel({interval: 2000});
      $("#carouselButton").click(function(){
          if ($("#carouselButton").children("span").hasClass('fa-pause')) {
              $("#mycarousel").carousel('pause');
              $("#carouselButton").children("span").removeClass('fa-pause');
              $("#carouselButton").children("span").addClass('fa-play');
          }
          else {
              $("#mycarousel").carousel('cycle');
              $("#carouselButton").children("span").removeClass('fa-play');
              $("#carouselButton").children("span").addClass('fa-pause');
          }
      });
  });
}

export function activateNavBar(index) {
  const navItems = document.getElementsByClassName('nav-item');
  const link = navItems[index].children[0];
  link.classList.add('active');
}
