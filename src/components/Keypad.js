import React from 'react'

export default class Keypad extends React.Component{

    handleKeyUp = (e) => {
        console.log("Entering password...")
    }

    render(){
       return <input type="password" onKeyUp={this.handleKeyUp}></input>
    }
}