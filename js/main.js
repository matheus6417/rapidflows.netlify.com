(function () {

    var navbar = {};
    
    navbar.init = function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 150) {
                $(".navbar").addClass("is-sticky");

            } else {
                $(".navbar").removeClass("is-sticky");

            }
        });
    };



    $(document).ready(function () {
        navbar.init();
     

    });

})();