import React from 'react';

import api from '../api';
import Header from '../_components/Header';

class VehiclesPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			vehicles: [],
		};
	}


	componentDidMount() {
		this.getVehicles();
	}

	getVehicles = () => {
		api('GET', 'vehicle')
			.then(res => this.setState({ vehicles: res.data }))
			.catch(e => {
				console.log(e);
			});
	};

	render() {
		return (
			<div>
			 	<Header/>
				<div className="VehiclesList">
					<h2>Vehicles</h2>
					{this.state.vehicles.map((vehicle, index) =>{
						return (
							<ol key={index}>
								{index + 1}.VehicleID:{vehicle}
								<br />
							</ol>
						);
					})}
				</div>
			</div>
		);
	}
}

export default VehiclesPage;
