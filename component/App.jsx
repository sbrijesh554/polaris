import React from 'react';
import {FileReaderhoc} from './FileReaderhoc';
import Test from './Test.jsx';
class FileReaderComp extends React.PureComponent{
    constructor(props){
        super();
        this.fileInput = React.createRef();
        this.state = {
            data: 0
        }
    }

    handleUpload =  (event) => {
        event.preventDefault();
        let result =  this.props.readFile(this.fileInput.current.files[0]);
    }

    runTest = () => {
        let data = this.state.data;
        data++;
        this.setState({
            data
        })
    }
    componentWillUpdate(){
        console.log("hello")
    }
    componentDidUpdate(){
        console.log("hi")
    }
    render(){
        return (
            <React.Fragment>
                <button onClick={this.runTest}>Click</button>
                <Test data = {this.state.data}></Test>

                {/* <form onSubmit={this.handleUpload}>
                    <label>
                        Upload file:
                    <input type="file" ref={this.fileInput} />
                    </label>
                    <input type="submit" value="SUBMIT"></input>
                </form>
                {
                this.props.data?
                    (<table>
                        <thead>
                            <tr>
                                <th>Column A</th>
                                <th>Column B</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.data.map((data)=>{
                                return <tr><td>data</td></tr>
                            })}
                        </tbody>
                    </table>)
                    :
                    ''
                } */}
            </React.Fragment>
            
        )
    }
}

export const App = FileReaderhoc(FileReaderComp);
export default App;