import React from 'react';
import {FileReaderhoc} from './FileReaderhoc';

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
        this.props.readFile(this.fileInput.current.files[0]);
    }


    
    render(){
        return (
            <React.Fragment>
                <form className = "form" onSubmit={this.handleUpload}>
                    <label>
                        Upload file:
                    <input type="file" ref={this.fileInput} />
                    </label>
                    <input type="submit" value="SUBMIT"></input>
                </form>
                {
                this.props.data?
                    (
                    <table>
                        <thead>
                            <tr>
                                <th>Column A</th>
                                <th>Column B</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.data.map((data,index)=>{
                                
                                    return (
                                    <tr key = {index}>
                                        <td>{Object.keys(data)[0]}</td>
                                        <td>{data[Object.keys(data)[0]]}</td>
                                    </tr>
                                    )
                            })
                            }
                        </tbody>
                    </table>
                    )
                    :
                    ''
                }
            </React.Fragment>
            
        )
    }
}

export const App = FileReaderhoc(FileReaderComp);
