import { Component } from "react"
import { arrForSort } from "../util/sortArr"

type Props = {
    array: arrForSort
}
export default class ArrayNumber extends Component<Props> {
    render() {
        return (
            <>
                <div style={{ display: "flex", alignItems: "flex-end", height: 200 }}>
                    {this.props.array.arr.map(el => <div className="column" style={{ height: el}}> </div>)}
                </div>
            </>
        )
    }
}
