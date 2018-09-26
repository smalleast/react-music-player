import React from 'react';
import Header from './components/header';
import Progress from './components/progress';


class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = { progress: '-' }
  }
  componentDidMount(){
    $('#player').jPlayer({
      ready:function(){
        $(this).jPlayer('setMedia',{
          mp3:'http://sc1.111ttt.cn/2018/1/03/13/396131232171.mp3'
        }).jPlayer('play');
      },
      supplied:'mp3',
      wmode:'window'
    });
    $('#player').bind($.jPlayer.event.timeupdate,(e)=>{
      this.setState({
        progress:Math.round(e.jPlayer.status.currentTime)
      });
    })
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <Header></Header>
        <Progress progress={this.state.progress}></Progress>
      </div>
    )
  }
};
export default Root;
