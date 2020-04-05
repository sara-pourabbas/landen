import React from 'react';
import {Dropdown} from 'primereact/dropdown';


export class DropDownDemo extends React.Component {

    state = {
        car: null
    };
    onCarChange = (e) => {
        this.setState({car: e.value});
    };
    render() {
        const cars = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
        ];

        return (
            <div className="content-section implementation mr-1">
                <Dropdown value={this.state.car} options={cars} onChange={this.onCarChange}
                          editable={true} placeholder="اختیاری"/>
            </div>
        );
    }
}