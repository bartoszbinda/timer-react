var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');
var TimerForm = require('TimerForm');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped',
      limit: undefined
    };
  },
  handleStatusChange: function(newStatus) {
      this.setState({
        countdownStatus: newStatus
      });
  },
  handleSetCountdown: function(seconds) {
    this.setState({
      countdownStatus: 'started',
      count: 0,
      limit: seconds
    });
  },
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus)
    {
      switch(this.state.countdownStatus)
      {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
            this.setState({count: 0})
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      if (newCount > this.state.limit)
      {
        this.setState({
          countdownStatus: 'stopped'
        });
        return;
      }
      else {
      this.setState({
        count: newCount
      });
    }

    }, 1000);
  },
  render: function (){
    var {count, countdownStatus, limit} = this.state;
    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
      return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
      } else {
        return <TimerForm onSetCountdown={this.handleSetCountdown} />
      }

    };
    return (
    <div>
      <h1 className="page-title">Timer</h1>
      <article>Write unlimited or b to have an unlimited timer</article>
      <Clock totalSeconds={count} />
      <div className="controls">{renderControlArea()} </div>
    </div>
  );
}
});
module.exports = Timer;
