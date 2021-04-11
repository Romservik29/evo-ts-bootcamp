import { Component } from 'react'
import './App.css';
import ArrayNumber from './components/ArrayNumber';
import Controls from './components/Controls';
import { rndArray } from './util/rndArr';
import { arrForSort, stepSortArr } from './util/sortArr';

export enum Sorting {
  NotRuning,
  Running,
  Paused,
  Finished
}

type State = {
  arr: arrForSort
  sorting: Sorting
  speed: number
  interval?: null | ReturnType<typeof setTimeout>
}

const BubbleSort = (): JSX.Element => <b style={{ fontSize: 50, color: "#50aedbe8" }}>∘˚˳ ° ∘ °Bubble sort∘˚˳ ° ∘ °</b>
export class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      arr: { arr: [...rndArray(30, 200)]},
      sorting: Sorting.NotRuning,
      speed: 20
    }
  }
  newArray = (length = 30, maxNumber = 200):void => {
    if (this.state.interval) clearInterval(this.state.interval)
    this.setState({interval: null, arr: { arr: [...rndArray(length, maxNumber)]}, sorting: Sorting.NotRuning })
  }
  pause = ():void => {
    if (this.state.interval) clearInterval(this.state.interval)
    this.setState({interval:null, sorting: Sorting.Paused })
  }
  sortArr = ():void => {
    const interval = setInterval(() => {
      this.setState({ arr: stepSortArr(this.state.arr) })
      if (this.state.arr.finished) {
        clearInterval(interval)
        this.setState({interval: null, sorting: Sorting.Finished })
      }
    }, this.state.speed)
    this.setState({ interval: interval, sorting: Sorting.Running })
  }
  changeSpeed = (speed: number):void => {
    if (this.state.interval) {
      clearInterval(this.state.interval)
    const interval = setInterval(() => {
      this.setState({ arr: stepSortArr(this.state.arr) })
      if (this.state.arr.finished) {
        clearInterval(interval)
        this.setState({interval: null, sorting: Sorting.Finished })
      }
    }, speed)
    this.setState({ interval: interval, sorting: Sorting.Running, speed: speed })
    }
    else this.setState({speed: speed})
  }
  render() {
    return (
      <div className="App">
        <BubbleSort />
        <ArrayNumber array={this.state.arr} />
        <Controls newArr={this.newArray} sort={this.sortArr} pause={this.pause} sorting={this.state.sorting} changeSpeed={this.changeSpeed} speed={this.state.speed} />
        <span>{Sorting[this.state.sorting]}</span>
      </div>
    )
  }
}


export default App;