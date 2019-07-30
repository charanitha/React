
import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
      var status = {4:{color:'success',value:'Successful'},3:{color:'danger',value:'Failed'},1:{color:'primary',value:'Running'},0:{color:'info', value:'Submitted'}};
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        fetch('url')
            .then(res => res.json())
            .then(json => {
                this.setState({isLoaded: true,items: json.executions})
            });
    }
    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        return (
            <div>
              
              <thead>
                <tr>
                    <th align = "center">Execution Time</th>
                    <th align = "center">Last Updated</th>
                    <th align = "center">Execution-type</th>
                    <th align = "center">&nbsp;&nbsp;Status&nbsp;&nbsp;</th>
                </tr>
              </thead>
              <tbody>{
                items.map((item,index) => <tr key="{index}">
                  <td>&nbsp;&nbsp;{item.scheduled_time}&nbsp;&nbsp;</td> 
                  <td>&nbsp;&nbsp;{item.updated_time}&nbsp;&nbsp;</td>
                  <td>&nbsp;&nbsp;{item.type == 0 ? 'scheduled': 'Manuel'}&nbsp;&nbsp;</td> 
                  <td>{item.result}</td>
                  
                  

                  </tr>)
              }
              </tbody>}
              
                }
            </div>
        )
}
}
