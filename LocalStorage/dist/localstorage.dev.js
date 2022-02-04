"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSession = exports.saveSession = exports.getLS = exports.saveLS = void 0;

// Save state values to local storage
var saveLS = function saveLS(val, name) {
  localStorage.setItem(name, JSON.stringify(val));
}; // Get state values from local storage


exports.saveLS = saveLS;

var getLS = function getLS(name) {
  return JSON.parse(localStorage.getItem(name));
}; // Save as browser session


exports.getLS = getLS;

var saveSession = function saveSession(val, name) {
  sessionStorage.setItem(name, JSON.stringify(val));
}; // Get as browser session


exports.saveSession = saveSession;

var getSession = function getSession(name) {
  return JSON.parse(sessionStorage.getItem(name));
};

exports.getSession = getSession;