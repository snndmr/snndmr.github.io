window.onload = function () {
    $("#birthday").datepicker();
    $("#programmingLanguage").autocomplete({
        source: ["ActionScript", "AppleScript", "Asp", "JavaScript", "Lisp", "Perl", "PHP", "Python"],
    });
};
