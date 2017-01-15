var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var TimerForm = require('TimerForm');

describe("TimerForm", () => {
  it('should exists', () => {
    expect(TimerForm).toExist();
  });
  it('should call onSetCountdown if valid seconds entered', () => {
    var spy = expect.createSpy();
    var timerForm = TestUtils.renderIntoDocument(<TimerForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(timerForm));

    timerForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);

  });
it('shouldnt called onSetCountdown with invalid seconds entered', () => {
  var spy =expect.createSpy();
  var timerForm = TestUtils.renderIntoDocument(<TimerForm onSetCountdown={spy}/>);
  var $el = $(ReactDOM.findDOMNode(timerForm));

  timerForm.refs.seconds.value = 'nan';
  TestUtils.Simulate.submit($el.find('form')[0]);
  expect(spy).toNotHaveBeenCalled();
})

});
