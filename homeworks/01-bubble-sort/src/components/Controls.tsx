import React, { Component } from 'react'
import { Sorting } from '../App'

type Props = {
    newArr: () => void
    sort: () => void
    sorting: Sorting | null
    speed: number
    changeSpeed?: (speed: number) => void
    pause: () => void
}

export default class Controls extends Component<Props, { speed: number }> {
    state = {
        speed: 20
    }
    // handleChangeSpeed = (e:React.ChangeEvent<HTMLInputElement>) => {
    //         this.setState({ speed: +e.target.value})    
    //         this.props.changeSpeed(30)    
    // }
    render() {
        return (
            <div>
                {this.props.sorting === Sorting.Running ? <button onClick={() => this.props.pause()}>Pause</button> : null}
                {this.props.sorting === Sorting.Finished ? <button disabled onClick={() => this.props.sort()}>Sort</button> : null}
                {this.props.sorting === Sorting.NotRuning ? <button onClick={() => this.props.sort()}>Sort</button> : null}
                {this.props.sorting === Sorting.Paused ? <button onClick={() => this.props.sort()}>Resume</button> : null}
                <button onClick={() => this.props.newArr()}>Set new array</button>
                {/* <input type="range" max="1000" min="10" step="10" value={this.state.speed} onChange={(e) => this.handleChangeSpeed(e)}/><label>{this.state.speed}</label> */}
            </div>
        )
    }
}
