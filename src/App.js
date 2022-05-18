import React, { Component } from 'react';
import Score from './Component/Score';
import Ex1 from './Component/ex1';

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { username: '' };
//     }
//     mySubmitHandler = (event) => {
//         event.preventDefaut();
//         alert("You are submitting " + this.state.username);
//     }
//     myChangeHandler = (event) => {
//         this.setState({ username: event.target.value });
//     }
//     render() {
//         return (
//             <form>
//             <h1>Hello {this.state.username}</h1>
//             <p>Enter your name, and submit:</p>
//             <input
//                 type='text'
//                 onChange={this.myChangeHandler}
//             />
//             <input
//                 type='submit'
//             />
//             </form>
//         );
//     }
// }


// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: ''
//         }
//         this.updateState = this.updateState.bind(this);
//     };
//     updateState(e) {
//         this.setState({data: e.target.value});
//     }
//     render() {
//         return (
//             <div>
//                 <Content myDataProp = {this.state.data}
//                 updateStateProp = {this.updateState}></Content>
//             </div>
//         );
//     }
// }
// class Content extends React.Component {
//     render() {
//         return (
//             <div>
//                 <input type='text' value={this.props.myDataProp}
//                     onChange = {this.props.updateStateProp}/>
//                 <h3>{this.props.myDataProp}</h3>
//             </div>
//         )
//     }
// }

class App extends React.Component {
    render() {
        return (
            <div>
                <Score/>
            </div>
        );
    }
}

// function AppTest(){
//     return (
//         <div>
//             <Ex1/>
//         </div>
//     );
// }

export default App;
// export default AppTest;