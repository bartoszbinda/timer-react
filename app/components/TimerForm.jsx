var React = require('react');

var TimerForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;
    if(strSeconds.match(/^[0-9]*$/))
    {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds,10));
    }
    else if(strSeconds === 'unlimited' || strSeconds === 'b')
    {
      var inf = Number.POSITIVE_INFINITY;
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(inf));
    }
  },
  render: function() {
    return(
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" placeholder="Enter time in seconds" ref="seconds" />
          <button className="button expanded" type='submit'>Start
          </button>
        </form>
      </div>
    );
  }
});
module.exports = TimerForm
