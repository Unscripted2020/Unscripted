import $ from 'jquery';
export function initalize(){
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
        $("#signUpButton").click(function(){
            $("#signUpModal").modal('show');
        });
        $("#signUpClose").click(function(){
            $("#signUpModal").modal('hide');
        });
        $("#signUpCancel").click(function(){
            $("#signUpModal").modal('hide');
        });
        $("#newAccount").click(function(){
            $("#loginModal").modal('hide');
            $("#signUpModal").modal('show');
        });
        $("#alreadyUser").click(function(){
            $("#loginModal").modal('show');
            $("#signUpModal").modal('hide');
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
