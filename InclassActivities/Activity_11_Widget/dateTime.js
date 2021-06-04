$(function () {
    var date = new Date();
    date.setDate(date.getDate() + 90);
    $("#arrival_date").datepicker({
        language: "en",
        autoClose: "true",
        minDate: new Date(),
        maxDate: date,
    });
});
