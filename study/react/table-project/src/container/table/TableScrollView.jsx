import React, { Component } from 'react';

import BusController from '../../api/BusController';

import TableList from '../../component/TableList';

import schema from './schema';

class TableScrollView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
		}
	}

	componentWillMount() {
		BusController.selectList(1, 1000, 20170301).then((response) => {
			this.setState({
				items: response.data.CardBusStatisticsServiceNew.row,
			});
		});
	}

	render() {
		return (
			<section>
				<div>
					<TableList
						items={this.state.items}
						schema={schema}
						showScroll={true}
					/>
				</div>
			</section>
		);
	}
}


export default TableScrollView;
