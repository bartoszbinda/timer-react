var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var Clock = require('Clock');
require('script!jquery/dist/jquery.min.js');
var $ = require('jquery');

describe('Clock', () => {
  it('should exists', () => {
    expect(Clock).toExist();
  });
  describe('formatSeconds', () => {
    it('should format seconds (more than 10 minutes/600s)', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
    it('should format seconds (less than 10 minutes/600s)', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 599;
      var expected = '09:59';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
    it('should format 0 seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 0;
      var expected = '00:00';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
    it('should format 61 seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  });
});
