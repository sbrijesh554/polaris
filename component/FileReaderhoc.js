import React from 'react';
import XLSX from 'xlsx';

export const FileReaderhoc  = (WrapperComponent) => {
    return class WrappedComponent extends React.Component{
        constructor(props){
            super();
            this.state = {
                data: null
            }
        }

        readFile = (file) => {
            var fileReader = new FileReader();
        
        
            fileReader.onload = () => {
                let workbook = XLSX.read(fileReader.result,{type: 'binary'});
                let data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
                this.setState({
                    data
                })
    
            }
        
        
            fileReader.onerror = () => {
                throw "Some error occured while reading the file!!!"
            }
            
        
            fileReader.readAsBinaryString(file);
        }

        render(){
             return <WrapperComponent readFile = {this.readFile} {...this.props} {...this.state}/>
         }
    }
}