import React, { Component } from 'react';
import './App.css';


const data = [
  { id: 'Bass Drum', letter: 'Q', src: 'http://www.footdrumplus.ca/uploads/3/4/8/6/34866267/s2-55.wav' },
  { id: 'Snare Drum', letter: 'W', src: 'http://cd.textfiles.com/maxsounds/WAV/EFEITOS/SD0050.WAV' },
  { id: 'Pot Drum', letter: 'E', src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Pot%20Drum.wav-20799-Free-Loops.com.mp3' },
  { id: 'Synth Hit', letter: 'A', src: 'http://www.pd.exxoshost.co.uk/MISC_UNKNOWN/ATARI_HQ_CD/Sounds/Wav/converted/tr24.wav' },
  { id: 'Synth Bass', letter: 'S', src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Misc%20Bass%20Hit%206-2619-Free-Loops.com.mp3' },
  { id: 'Synth Bass Hit', letter: 'D', src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Bass%20Rhodes.wav-20889-Free-Loops.com.mp3' },
  { id: 'Electric Guitar', letter: 'Z', src: 'http://amath.colorado.edu/pub/matlab/music/wav/electric_guitar.wav' },
  { id: 'Piano', letter: 'X', src: 'http://amath.colorado.edu/pub/matlab/music/wav/piano_A5.wav' },
  { id: 'DJ Scratching', letter: 'C', src: 'http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/DJ%20Scratching.wav-18609-Free-Loops.com.mp3'  },
];

class DrumPad extends Component {
 
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown)
    window.focus()
  }
  
 componentWillUnmount() {
   document.removeEventListener('keydown', this.handleKeydown)
 }
  
  handleKeydown = event => {
    if(event.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }
 
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }
  
  render() {
    return (
      <div 
        className='drum-pad' 
        id={this.props.id}
        onClick={this.handleClick}
      >
        <h1>{this.props.letter}</h1>
        <audio 
          id={this.props.letter}
          className='clip'
          src={this.props.src}
          ref={ref => this.audio = ref}
        >
        </audio>
      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      display: 'Click or Press a Key'
    }
  }
  
  handleDisplay = display => this.setState({ display })
  
  render(){
    return(
    <div id='drum-machine'>
      <div id='display'>{this.state.display}</div>
      <div id='drum-pads'>{data.map(event => (
        <DrumPad
          key={event.id}
          id={event.id}
          letter={event.letter}
          src={event.src}
          handleDisplay={this.handleDisplay}
        />
        ))}
      </div>
    </div>
    )
  }
}



export default App;
