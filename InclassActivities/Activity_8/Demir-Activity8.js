var delay = 500;

var level = 1;
var clicked_counter = 0;

var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function () {
    move();

    $("enemy_button").onmousedown = clicked;
    $("enemy_button").addEventListener("mouseover", () => setTimeout(move, delay));
};

var move = function () {
    game_size = window.getComputedStyle($("game"));
    enemy_button_size = window.getComputedStyle($("enemy_button"));

    max_width = parseInt(game_size.width, 10) - parseInt(enemy_button_size.width, 10);
    max_height = parseInt(game_size.height, 10) - parseInt(enemy_button_size.height, 10);

    enemy_button.style.marginTop = Math.random() * max_height + "px";
    enemy_button.style.marginLeft = Math.random() * max_width + "px";
};

var clicked = function () {
    clicked_counter += 1;

    $("clicked_text").innerHTML = "To Level Up: " + clicked_counter + "/3";

    if (clicked_counter == 3) {
        level += 1;
        
        clicked_counter = 0;
        delay -= delay == 0 ? 0 : 100;

        alert("(⌐■_■)--︻デ═一  -  Level Up!");

        $("clicked_text").innerHTML = "To Level Up: " + clicked_counter + "/3";
        $("level_text").innerHTML = "Level " + level + " (Delay: " + delay + "ms.)";
        $("enemy_button").style.transition = delay + "ms";
    }
};
