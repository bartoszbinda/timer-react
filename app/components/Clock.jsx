  var React = require('react');
var Clock = React.createClass({
  formatSeconds: function(totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);
    if (seconds < 10) { seconds = '0' + seconds };
    if(minutes < 10 && minutes > 0){
      return '0' + minutes + ':' + seconds;
    }
    else if (minutes >= 0 && minutes < 1 ) {
      return '00:' + seconds;
    }
    return minutes + ':' + seconds
  },
  render: function() {
    return (
      <div>
        Clock
      </div>
    );
  }

});
module.exports = Clock;
