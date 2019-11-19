System.register(["./math/circle", "./math/rectangle"], function (exports_1, context_1) {
    "use strict";
    var circle_1, rectangle_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (circle_1_1) {
                circle_1 = circle_1_1;
            },
            function (rectangle_1_1) {
                rectangle_1 = rectangle_1_1;
            }
        ],
        execute: function () {
            console.log('JOVAN');
            console.log(circle_1.calculateCircumference(10));
            console.log(rectangle_1.calculateRectangle(10, 20));
            console.log(circle_1.PI);
        }
    };
});
