var delay = 500;

var level = 1;
var clicked_counter = 0;

var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function () {
    move();

    $("enemy_button").onclick = clicked;
    $("enemy_button").addEventListener("mouseover", () => setTimeout(move, delay));
};

var move = function () {
    var button = $("enemy_button");

    game_size = window.getComputedStyle($("game"));
    enemy_button_size = window.getComputedStyle(button);

    max_width = parseInt(game_size.width, 10) - parseInt(enemy_button_size.width, 10);
    max_height = parseInt(game_size.height, 10) - parseInt(enemy_button_size.height, 10);

    button.style.marginTop = Math.random() * max_height + "px";
    button.style.marginLeft = Math.random() * max_width + "px";
};

var clicked = function () {
    clicked_counter += 1;

    $("clicked_text").innerHTML = "To Level Up: " + clicked_counter + "/3";

    if (clicked_counter == 3) {
        level += 1;
        clicked_counter = 0;
        delay -= delay == 0 ? 0 : 100;

        alert("Level Up!");

        $("clicked_text").innerHTML = "To Level Up: " + clicked_counter + "/3";
        $("level_text").innerHTML = "Level " + level + " (Delay: " + delay + "ms.)";
    }
};
