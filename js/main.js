(function () {

    var navbar = {};
    var features = {};

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

    features.init = function () {

        // Active the first thumb & panel
        $(".tabs-thumb:first-child").addClass("is-active").closest(".tabs").find(".tabs-panel:first-child")
            .show();

        $(".tabs-thumb").click(function () {
            // Cancel the siblings
            $(this).siblings(".tabs-thumb").removeClass("is-active").closest(".tabs").find(".tabs-panel").hide();
            // Active the thumb & panel
            $(this).addClass("is-active").closest(".tabs").find(".tabs-panel").eq($(this).index(
                ".tabs-thumb")).show();
        });
    }


    $(document).ready(function () {
        navbar.init();
        features.init();
        (function () {
            document.getElementsByTagName('body')[0].classList.remove("fade-out");
        }());

    });

})();