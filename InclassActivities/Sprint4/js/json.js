$(document).ready(function () {
    $.getJSON("../data/data.json", function (data) {
        data.sub_paragraphs.forEach((sub_paragraph) => {
            $(".quest-container").append(
                $("<div>").append(
                    $("<h3>").prop({
                        innerHTML: sub_paragraph.title + " ",
                    }),
                    $("<p>").prop({
                        innerHTML: sub_paragraph.paragraph + " ",
                    })
                )
            );
        });
    });
});
