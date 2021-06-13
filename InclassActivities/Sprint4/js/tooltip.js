function buildTooltip($elem, alignment, message) {
    if (message == null || message == undefined) message = $elem.attr("title");

    $elem.tooltip({
        text: message,
        gapBetweenElementAndTooltip: 5,
        alignmentType: alignment,
        tooltipType: "info",
    });
}

$(document).ready(function () {
    buildTooltip($("img"), "RIGHT");
});
