"use strict";

var module = angular.module("sabhiram.slick-slider", []);
module.directive("sabSlickSlider", function() {
    return {
        restrict: "E",
        scope: {
            value: "=",
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
            "            {{value}}",
            "            <div class='sab-slider-value-reset' ng-click='value = default'>default</div>",
            "        </div>",
            "    </div>",
            "    <div class='sab-slider-min'>{{min}}</div>",
            "    <div class='sab-slider-max'>{{max}}</div>",
            "    <div class='sab-slider-input-container'>",
            "        <input class='sab-slider-input' ng-model='value' type='range' min='{{min}}' max='{{max}}'></input>",
            "    </div>",
            "</div>",
        ].join("\n"),
        link: function(scope, element, attributes) {
            scope.min     = parseInt(scope.min, 10) || 0;
            scope.max     = parseInt(scope.min, 10) || 100;
            scope.default = parseInt(scope.default, 10) || 50;
            console.log("Linking directive: value is: ", + scope.value);
        }
    };
});
