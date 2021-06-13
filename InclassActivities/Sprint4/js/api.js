$(document).ready(function () {
    var url = "https://reqres.in/api/users?page=2";

    $.getJSON(url, function (fetched) {
        fetched.data.forEach((user) => {
            $(".grid-container").append(
                $("<div>")
                    .prop({
                        class: "grid-item",
                    })
                    .append(
                        $("<img>").attr("src", user.avatar).attr("alt", "avatar").width("150px").height("150px"),
                        $("<h3>").prop({
                            innerHTML: user.first_name + " " + user.last_name,
                        }),
                        $("<p>").prop({
                            innerHTML: user.email + " ",
                        })
                    )
            );
        });
    });
});
