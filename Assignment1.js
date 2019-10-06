var gl;
var points;

window.onload = function init() {
    var vertices_array = [
        new Float32Array([-2, -2, 0, 2, 2, -2]), /* -- Red Triangle Vertices -- */
        new Float32Array([-1, .75, 0, -.75, 1, 0]), /* -- Colorful Triangle Vertices -- */
        new Float32Array([-1, .75, 0, -.75, 1, 0, .75, 1]) /* -- Tetragon Vertices -- */
    ]

    var colors_array = [
        new Float32Array([1, 0, 0, 1,
                          1, 0, 0, 1,
                          1, 0, 0, 1]), /* -- Red Triangle Default Colors -- */
        new Float32Array([1, .4, .7, .8,
                          .5, .9, .3, .7,
                          .7, .5, .3, .8, ]), /* -- Colorful Triangle Default Colors -- */
        new Float32Array([.25, 1, .2, 1,
                          .25, 1, .2, 1,
                          .25, .8, 1, 1,
                          .25, .8, 1, 1]) /* -- Tetragon Default Colors -- */
    ]

    init_html_elements(vertices_array, colors_array);

    /* -- Default -- */

    webGL(vertices_array[0], colors_array[0]);
    render_TRIANGLES();

    /* -- End of Default -- */
};


function init_html_elements(vertices_array, colors_array) {
    /* -- Radio Buttons -- */

    var triangle_one = document.getElementById("triangle_one");
    var triangle_two = document.getElementById("triangle_two");
    var tetragon_one = document.getElementById("tetragon_one");

    triangle_one.addEventListener('click', function () {
        webGL(vertices_array[0], colors_array[0]);
        render_TRIANGLES();
    });

    triangle_two.addEventListener('click', function () {
        webGL(vertices_array[1], colors_array[1]);
        render_TRIANGLES();
    });

    tetragon_one.addEventListener('click', function () {
        webGL(vertices_array[2], colors_array[2]);
        render_TRIANGLE_FAN();
    });

    var selected_edge = 0;
    var triangle_two_edge_one = document.getElementById("triangle_two_edge_one");
    var triangle_two_edge_two = document.getElementById("triangle_two_edge_two");
    var triangle_two_edge_thr = document.getElementById("triangle_two_edge_thr");

    triangle_two_edge_one.addEventListener('click', function () {
        selected_edge = 0;
    });

    triangle_two_edge_two.addEventListener('click', function () {
        selected_edge = 1;
    });

    triangle_two_edge_thr.addEventListener('click', function () {
        selected_edge = 2;
    });

    /* -- End of Radio Buttons -- */

    /* -- Spinners -- */

    /*  -- Red Triangle's spinner -- */

    var spinner_one_red = document.getElementById("red_triangle_one");
    var spinner_one_green = document.getElementById("green_triangle_one");
    var spinner_one_blue = document.getElementById("blue_triangle_one");
    var spinner_one_alpha = document.getElementById("alpha_triangle_one");

    spinner_one_red.oninput = function () {
        if (triangle_one.checked) {
            colors_array[0][0] = this.value / 100;
            colors_array[0][4] = this.value / 100;
            colors_array[0][8] = this.value / 100;

            webGL(vertices_array[0], colors_array[0]);
            render_TRIANGLES();
        } else {
            for (var radio_button_temp in document.getElementsByName("options")) {
                radio_button_temp.checked = false;
            }
            triangle_one.checked = true;
        }
    }
    spinner_one_green.oninput = function () {
        if (triangle_one.checked) {
            colors_array[0][1] = this.value / 100;
            colors_array[0][5] = this.value / 100;
            colors_array[0][9] = this.value / 100;

            webGL(vertices_array[0], colors_array[0]);
            render_TRIANGLES();
        } else {
            for (var radio_button_temp in document.getElementsByName("options")) {
                radio_button_temp.checked = false;
            }
            triangle_one.checked = true;
        }
    }
    spinner_one_blue.oninput = function () {
        if (triangle_one.checked) {
            colors_array[0][2] = this.value / 100;
            colors_array[0][6] = this.value / 100;
            colors_array[0][10] = this.value / 100;

            webGL(vertices_array[0], colors_array[0]);
            render_TRIANGLES();
        } else {
            for (var radio_button_temp in document.getElementsByName("options")) {
                radio_button_temp.checked = false;
            }
            triangle_one.checked = true;
        }
    }
    spinner_one_alpha.oninput = function () {
        if (triangle_one.checked) {
            colors_array[0][3] = this.value / 100;
            colors_array[0][7] = this.value / 100;
            colors_array[0][11] = this.value / 100;

            webGL(vertices_array[0], colors_array[0]);
            render_TRIANGLES();
        } else {
            for (var radio_button_temp in document.getElementsByName("options")) {
                radio_button_temp.checked = false;
            }
            triangle_one.checked = true;
        }
    }

    /* -- Colorful Triangle's spinner -- */

    var spinner_two_red = document.getElementById("red_triangle_two");
    var spinner_two_green = document.getElementById("green_triangle_two");
    var spinner_two_blue = document.getElementById("blue_triangle_two");
    var spinner_two_alpha = document.getElementById("alpha_triangle_two");

    spinner_two_red.oninput = function () {
        if (triangle_two.checked) {
            if (selected_edge == 0) {
                colors_array[1][0] = this.value / 100;
            } else if (selected_edge == 1) {
                colors_array[1][4] = this.value / 100;
            } else if (selected_edge == 2) {
                colors_array[1][8] = this.value / 100;
            }

            webGL(vertices_array[1], colors_array[1]);
            render_TRIANGLES();
        } else {
            for (var radio_button_temp in document.getElementsByName("options")) {
                radio_button_temp.checked = false;
            }
            triangle_two.checked = true;
        }
    }
    spinner_two_green.oninput = function () {
        if (triangle_two.checked) {
            if (selected_edge == 0) {
                colors_array[1][1] = this.value / 100;
            } else if (selected_edge == 1) {
                colors_array[1][5] = this.value / 100;
            } else if (selected_edge == 2) {
                colors_array[1][9] = this.value / 100;
            }

            webGL(vertices_array[1], colors_array[1]);
            render_TRIANGLES();
        } else {
            for (var radio_button_temp in document.getElementsByName("options")) {
                radio_button_temp.checked = false;
            }
            triangle_two.checked = true;
        }
    }
    spinner_two_blue.oninput = function () {
        if (triangle_two.checked) {
            if (selected_edge == 0) {
                colors_array[1][2] = this.value / 100;
            } else if (selected_edge == 1) {
                colors_array[1][6] = this.value / 100;
            } else if (selected_edge == 2) {
                colors_array[1][10] = this.value / 100;
            }

            webGL(vertices_array[1], colors_array[1]);
            render_TRIANGLES();
        } else {
            for (var radio_button_temp in document.getElementsByName("options")) {
                radio_button_temp.checked = false;
            }
            triangle_two.checked = true;
        }
    }
    spinner_two_alpha.oninput = function () {
        if (triangle_two.checked) {
            if (selected_edge == 0) {
                colors_array[1][3] = this.value / 100;
            } else if (selected_edge == 1) {
                colors_array[1][7] = this.value / 100;
            } else if (selected_edge == 2) {
                colors_array[1][11] = this.value / 100;
            }

            webGL(vertices_array[1], colors_array[1]);
            render_TRIANGLES();
        } else {
            for (var radio_button_temp in document.getElementsByName("options")) {
                radio_button_temp.checked = false;
            }
            triangle_two.checked = true;
        }
    }

    /* -- Tetragon's spinner -- */

    var spinner_thr_red = document.getElementById("red_tetragon_one");
    var spinner_thr_green = document.getElementById("green_tetragon_one");
    var spinner_thr_blue = document.getElementById("blue_tetragon_one");
    var spinner_thr_alpha = document.getElementById("alpha_tetragon_one");

    spinner_thr_red.oninput = function () {
        if (tetragon_one.checked) {
            colors_array[2][0] = this.value / 100;
            colors_array[2][4] = this.value / 100;
            colors_array[2][8] = this.value / 100;
            colors_array[2][12] = this.value / 100;

            webGL(vertices_array[2], colors_array[2]);
            render_TRIANGLE_FAN();
        } else {
            for (var radio_button_temp in document.getElementsByName("options")) {
                radio_button_temp.checked = false;
            }
            tetragon_one.checked = true;
        }
    }
    spinner_thr_green.oninput = function () {
        if (tetragon_one.checked) {
            colors_array[2][1] = this.value / 100;
            colors_array[2][5] = this.value / 100;
            colors_array[2][9] = this.value / 100;
            colors_array[2][13] = this.value / 100;

            webGL(vertices_array[2], colors_array[2]);
            render_TRIANGLE_FAN();
        } else {
            for (var radio_button_temp in document.getElementsByName("options")) {
                radio_button_temp.checked = false;
            }
            tetragon_one.checked = true;
        }
    }
    spinner_thr_blue.oninput = function () {
        if (tetragon_one.checked) {
            colors_array[2][2] = this.value / 100;
            colors_array[2][6] = this.value / 100;
            colors_array[2][10] = this.value / 100;
            colors_array[2][14] = this.value / 100;

            webGL(vertices_array[2], colors_array[2]);
            render_TRIANGLE_FAN();
        } else {
            for (var radio_button_temp in document.getElementsByName("options")) {
                radio_button_temp.checked = false;
            }
            tetragon_one.checked = true;
        }
    }
    spinner_thr_alpha.oninput = function () {
        if (tetragon_one.checked) {
            colors_array[2][3] = this.value / 100;
            colors_array[2][7] = this.value / 100;
            colors_array[2][11] = this.value / 100;
            colors_array[2][15] = this.value / 100;

            webGL(vertices_array[2], colors_array[2]);
            render_TRIANGLE_FAN();
        } else {
            for (var radio_button_temp in document.getElementsByName("options")) {
                radio_button_temp.checked = false;
            }
            tetragon_one.checked = true;
        }
    }

    /* -- End of Spinners -- */
}

function webGL(vertices, colors) {
    var canvas = document.getElementById("gl-canvas");

    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) {
        alert("WebGL isn't available");
    }

    //  Configure WebGL

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    //  Load shaders and initialize attribute buffers

    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    // Load the vertices data into the GPU

    var bufferVertices = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferVertices);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    // Associate out shader variables with our data buffer

    var vPosition = gl.getAttribLocation(program, "vPosition");
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    // Load the colors data into the GPU

    var bufferColor = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferColor);
    gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);

    // Associate out shader variables with our data buffer

    var vColor = gl.getAttribLocation(program, "vColor");
    gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vColor);
}


function render_TRIANGLES() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
}

function render_TRIANGLE_FAN() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
}
