$(document).ready(function () {
    $(".navbar").fadeIn("slow");
    $("a").fadeIn("slow");

    $("#image_one").click(function () {
        $("#image_one").animate({ height: "toggle" });
    });

    $("#image_two").click(function () {
        $("#image_two").animate({ height: "toggle" });
    });
});
