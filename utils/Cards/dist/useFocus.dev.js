"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// Custom hook
var useFocus = function useFocus() {
  var ref = useRef(null);

  var setFocus = function setFocus() {
    ref.current && ref.current.focus();
  };

  return [ref, setFocus];
};

var _default = useFocus;
exports["default"] = _default;