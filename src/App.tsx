import React from 'react';
import {ComboBoxComponent} from '@syncfusion/ej2-react-dropdowns';
import {employees} from './data';
import './App.css';

function App() {
  const divStyle = {
    margin: 100,
    width: 250
  }
  const CustomGroupHeader=(props:any)=>(
    <div className='customGroup'>
      {props.Designation}
    </div>
  );
  return (
     <div>
        <div style={divStyle}>
          <ComboBoxComponent 
          dataSource={employees} 
          placeholder="Select a name"
          groupTemplate={CustomGroupHeader}
          allowFiltering={true}
          ignoreCase={false}
          ignoreAccent={true}
          filterType="StartsWith"
          fields={{
            text:"Name", 
            value:"EmployeeID",
            groupBy: "Designation"
          }}></ComboBoxComponent>
      </div>
     </div>
  );
} 

export default App;
