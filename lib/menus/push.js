'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var menuFactory = require('../menuFactory');
var appendVendorPrefix = require('react-kit/appendVendorPrefix');

var styles = {

  menuWrap: function menuWrap(isOpen) {
    return appendVendorPrefix({
      position: 'fixed',
      zIndex: 2,
      width: 300,
      height: '100%',
      transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
      transition: 'all 0.5s'
    });
  },

  menu: function menu() {
    return appendVendorPrefix({
      height: '100%'
    });
  },

  item: function item() {
    return appendVendorPrefix({
      display: 'block',
      outline: 'none'
    });
  },

  overlay: function overlay(isOpen) {
    return appendVendorPrefix({
      position: 'fixed',
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.3)',
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)',
      transition: isOpen ? 'opacity 0.5s' : 'opacity 0.5s, transform 0.1s 0.5s',
      zIndex: 1
    });
  },

  pageWrap: function pageWrap(isOpen) {
    return appendVendorPrefix({
      transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(300px, 0, 0)',
      transition: 'all 0.5s'
    });
  },

  outerContainer: function outerContainer(isOpen) {
    return appendVendorPrefix({
      overflow: isOpen ? '' : 'hidden'
    });
  }
};

exports['default'] = menuFactory(styles);
module.exports = exports['default'];