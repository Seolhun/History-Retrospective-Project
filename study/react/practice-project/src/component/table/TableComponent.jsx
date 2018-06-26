import React, { Component } from 'react';

import PropTypes from 'prop-types';

import './TableComponent.css';

class TableComponent extends Component {
	renderHeader() {
		return this.props.schema.map((schem) => {
			return <th key={schem.id}>
				{schem.name}
			</th>
		});
	}

	renderBody() {
		return this.props.items.map((item, idx) => {
			return <tr key={idx}>
				{
					this.props.schema.map((schem) => {
						return <td key={schem.id}>
							{item[schem.key]}
						</td>
					})
				}
			</tr>
		});
	}

	render() {
		return (
			<section>
				<div className={this.props.showScroll ? 'scroll-table' : 'paging-table'}>
					<table className='table table-hover'>
						<thead>
							<tr>
								{
									this.renderHeader()
								}
							</tr>
						</thead>
						<tbody>
							{
								this.renderBody()
							}
						</tbody>
					</table>
				</div>
			</section>
		);
	}
}

TableComponent.propTypes = {
	items: PropTypes.array.isRequired,
	schema: PropTypes.array.isRequired,

	showScroll: PropTypes.bool,
	className: PropTypes.string,
}

TableComponent.defaultProps = {
	showScroll: false,
	className: '',
}

export default TableComponent;
