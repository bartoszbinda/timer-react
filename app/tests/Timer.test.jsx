var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var Timer = require('Timer');


describe("Timer", () => {
  it('it should exists', () => {
    expect(Timer).toExist()
  });
  describe("handleSetCountdown", () => {
    it("should setState to started and start countdown", (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetCountdown();
      expect(timer.state.count).toBe(0);
      expect(timer.state.countdownStatus).toBe("started");
      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });

    it("when paused shouldnt add to count", (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleSetCountdown();
      expect(timer.state.countdownStatus).toBe("started");
      expect(timer.state.count).toBe(0);
      timer.handleStatusChange("paused");
      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        done();
      },1001);
    });
    it("when stopped count should be 0", () => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleSetCountdown();
      timer.handleStatusChange('stopped');
      expect(timer.state.countdownStatus).toBe("stopped");
      expect(timer.state.count).toBe(0);
    });
    it("when started it should add time to count", (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleSetCountdown();
      setTimeout(() => {
        expect(timer.state.count).toBe(3);
        done();
      },3001);
    });
  });
});
