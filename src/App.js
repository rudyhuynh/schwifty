import React, { Component } from 'react';
import './App.css';

class App extends Component {
  static CANVAS_WIDTH = 100;
  static CANVAS_HEIGHT = 100;

  componentDidMount(){
    this._ctx = this._canvas.getContext('2d')
  }
  clear(){
    this._ctx.clearRect(0, 0, App.CANVAS_WIDTH, App.CANVAS_HEIGHT)
    this._ctx.beginPath();
  }
  onMouseDown(e){
    this.isMouseDown = true
    const relativeX = e.clientX - this._canvas.offsetLeft
    const relativeY = e.clientY - this._canvas.offsetTop
    this._ctx.moveTo(relativeX, relativeY)
  }
  onMouseUp(){
    this.isMouseDown = false
  }
  onMouseMove(e){
    if (this.isMouseDown){
      const relativeX = e.clientX - this._canvas.offsetLeft
      const relativeY = e.clientY - this._canvas.offsetTop
      if (relativeX < 0 || relativeX > App.CANVAS_WIDTH 
        || relativeY < 0 || relativeY > App.CANVAS_HEIGHT){
        this.isMouseDown = false
        return
      }
      this._ctx.lineTo(relativeX, relativeY)
      this._ctx.lineWidth = 6
      this._ctx.stroke()
    }
  }
  recognize(){

  }
  render() {
    return (
      <div className="App">
        <div style={styles.drawerWrapper}>
          <canvas ref={(c) => this._canvas = c} width={App.CANVAS_WIDTH} height={App.CANVAS_HEIGHT}
            style={{border: '1px solid red'}}
            id="canvas"
            onMouseDown={(e) => this.onMouseDown(e)}
            onMouseUp={() => this.onMouseUp()}
            onMouseMove={(e) => this.onMouseMove(e)}
          ></canvas>
        </div>
        <div>
          <button onClick={() => this.clear()}>Clear</button>
          <button onClick={() => this.recognize()}>Submit</button>
        </div>
      </div>
    );
  }
}

const styles = {
  drawerWrapper:{
    margin: 'auto',
    width: 100,
    marginBottom: 10
  }
}

export default App;
