const delay = 1000;

$(document).ready(function () {
    $("#image_list a").each(function () {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    $("#image_list a").click(function (evt) {
        var imageURL = $(this).attr("href");
        var caption = $(this).attr("title");

        $("#image")
            .fadeOut(delay)
            .promise()
            .done(function () {
                $("#image").attr("src", imageURL);
                $("#image").fadeIn(delay);
            });

        $("#caption")
            .fadeOut(delay)
            .promise()
            .done(function () {
                $("#caption").text(caption);
                $("#caption").fadeIn(delay);
            });

        evt.preventDefault();
    });

    // move focus to first thumbnail
    $("li:first-child a").focus();
    $("#image").hide().fadeIn(delay);
    $("#caption").hide().fadeIn(delay);
});
