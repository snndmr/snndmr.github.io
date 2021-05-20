var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function () {
    $("add").onclick = addScore;
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;

    document.getElementById("name").focus();
};

var addScore = function () {
    var name = $("name").value;
    var score = $("score").value;

    if (name != "" && score != "" && 0 <= score && 100 >= score) {
        names.push(name);
        scores.push(score);
    } else alert("You must enter a name and a valid score");
};

var displayResults = function () {
    var sum = 0;
    var max = 0;
    var max_index = 0;

    for (var i = 0; i < scores.length; i++) {
        var num = parseInt(scores[i], 10);

        sum += num;

        if (max < num) {
            max = num;
            max_index = i;
        }
    }

    var results = document.getElementById("results");
    results.innerHTML = "";

    const result_title = document.createElement("h2");
    result_title.appendChild(document.createTextNode("Results"));
    results.appendChild(result_title);

    const average_text = document.createElement("p");
    average_text.appendChild(document.createTextNode("Average score = " + sum / scores.length));
    results.appendChild(average_text);

    const high_score_text = document.createElement("p");
    high_score_text.appendChild(
        document.createTextNode(
            "High score = " + names[max_index] + " with a score of " + scores[max_index]
        )
    );
    results.appendChild(high_score_text);
};

var displayScores = function () {
    var title = document.getElementById("score_title");
    var table = document.getElementById("scores_table");
    table.innerHTML = "";

    if (title == null) {
        const score_title = document.createElement("h2");
        score_title.id = "score_title";
        score_title.appendChild(document.createTextNode("Scores"));
        var parent = document.getElementById("scores_table").parentNode;
        parent.insertBefore(score_title, table);
    }

    var row = table.insertRow(-1);
    row.style.textAlign = "left";

    var name_header = document.createElement("th");
    name_header.innerHTML = "Name";
    row.appendChild(name_header);

    var score_header = document.createElement("th");
    score_header.innerHTML = "Score";
    row.appendChild(score_header);

    for (var i = 0; i < scores.length; i++) {
        var row = table.insertRow(-1);

        var name = row.insertCell(0);
        name.innerHTML = names[i];

        var score = row.insertCell(1);
        score.innerHTML = scores[i];
    }
};
