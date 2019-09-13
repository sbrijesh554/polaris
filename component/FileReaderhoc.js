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
                let result = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]],{header:"A",blankrows:false,raw:false});
                const data = [];
                for(let i=0; i<result.length;i=i+2){
                    let parsedData = {};
                    if(result[i]['D']){
                        parsedData[result[i]['C']] =  result[i]['D'];
                    }
                    else{
                        parsedData[result[i]['C']] =  result[i]['E'];
                    }
                    data.push(parsedData);
                }
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