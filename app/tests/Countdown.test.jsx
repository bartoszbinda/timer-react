var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var Countdown = require('Countdown');

describe("Countdown", () => {
  it("Should have exists", () => {
    expect(Countdown).toExist();
  });
  describe("handleSetCountdown", (done) => {
    it('should set state to started and countdown', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe("started");
      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      },1001);
    });
    it('shouldnt go to negative number', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);
      expect(countdown.state.countdownStatus).toBe("started");
      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      },3001);
    });
    it('when paused, count should still be the same', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);
      expect(countdown.state.countdownStatus).toBe('started');
      countdown.handleStatusChange('paused');
      expect(countdown.state.countdownStatus).toBe('paused');
      setTimeout(() => {
        expect(countdown.state.count).toBe(10);
        done();
      }, 1001);

      });
      it('when stopped, count should still be 0', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(10);
        expect(countdown.state.countdownStatus).toBe('started');
        countdown.handleStatusChange('stopped');
        expect(countdown.state.countdownStatus).toBe('stopped');
        setTimeout(() => {
          expect(countdown.state.count).toBe(0);
          done();
        }, 1001);
      });
    });
  });
