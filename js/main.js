$(document).ready(function () {
        $("#menu-click").on("click", function (e) {
                e.preventDefault();
                $(".left").toggleClass("leftgrow");
                // $(".menu-icon").css("display", "inline-block");
                $(".bglogo").toggleClass("bglogogrow");
                
        });
        $(document).ready(function () {
                $("#rmenu-click").on("click", function (e) {
                        e.preventDefault();
                        $(".right").toggleClass("rightgrow");
                        $(".chatbg").toggleClass("bgchatgrow");
                }
                )
        }
        )
        $("#toogle-bg").on("click", function () {
                $(this).toggleClass("fas");
        })
});