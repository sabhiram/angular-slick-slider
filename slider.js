"use strict";

var module = angular.module("sabhiram.slick-slider", []);
module.directive("sabSlickSlider", function() {
    return {
        restrict: "E",
        scope: {
            val: "=value",
            min: "@",
            max: "@",
            default: "@"
        },
        replace: true,
        transclude: true,
        template: [
            "<div class='sab-slider-container' ng-mouseenter='focused = true' ng-mouseleave='focused = false'>",
            "    <div class='sab-slider-name-container'>",
            "        <div class='sab-slider-name' ng-transclude ng-class='{\"underfocus\": focused}'></div>",
            "        <div class='sab-slider-value' align='center' ng-class='{\"underfocus\": !focused}'>",
            "            {{val}}",
            "            <div class='sab-slider-value-reset' ng-click='val = default'>default</div>",
            "        </div>",
            "    </div>",
            "    <div class='sab-slider-min'>{{min}}</div>",
            "    <div class='sab-slider-max'>{{max}}</div>",
            "    <div class='sab-slider-input-container'>",
            "        <input class='sab-slider-input' ng-model='val' value='{{val}}' type='range' min='{{min}}' max='{{max}}'></input>",
            "    </div>",
            "</div>",
        ].join("\n"),
        link: function(scope, element, attributes) {
            scope.min     = parseInt(scope.min, 10) || 0;
            scope.max     = parseInt(scope.max, 10) || 100;
            scope.default = parseInt(scope.default, 10) || 50;

            if (typeof(scope.val) == "undefined") {
                scope.val = scope.default;
            }

            scope.val = scope.val + 1;
        }
    };
});
