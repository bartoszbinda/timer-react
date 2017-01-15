var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  handleStatusChange: function(newStatus) {
      this.setState({
        countdownStatus: newStatus
      });
  },
  handleSetCountdown: function() {
    this.setState({
      countdownStatus: 'started',
      count: 0
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
      this.setState({
        count: newCount
      });

    }, 1000);
  },
  render: function (){
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
      return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
      } else {
        return <button className="button primary" onClick={this.handleSetCountdown}>Start</button>
      }

    };
    return (
    <div>
      <h1 className="page-title">Timer</h1>
      <Clock totalSeconds={count} />
      <div className="controls">{renderControlArea()} </div>
    </div>
  );
}
});
module.exports = Timer;
