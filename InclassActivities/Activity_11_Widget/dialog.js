$(function () {
    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            OK: function () {
                $(this).dialog("close");
            },
        },
    });
    $("#policies").click(function () {
        $("#dialog").dialog("open");
    });
});
