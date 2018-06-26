import React, { Component, Fragment } from 'react';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import dummy from './_dummy.json';
import schema from './schema';

import TableComponent from '../../component/table'

class ObservableEventFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: '',
		}

		const source = Observable.fromEvent(document, 'click');
		const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
		const subscribe = example.subscribe(val => console.log(val));

		const searchInput = document.getElementById('searchInputld');
		const filter = (query) => Observable.fromEvent(searchInput, 'keydown')
			.map((e) => {
				console.log('#### 1', e.target.value);
				return e.target.value;
			})
			.debounce(500)
			.distinctUntilChanged()
			.scan(function(prev, current) {
				console.log('#### 1', prev, current);
				if (prev && current === query) {
						return null;
				}
				return current; 
			}, null)
			.filter((text) => {
				console.log('#### 2', text);
				if (dummy.id === text) {
					return true;
				}
				if (dummy.first_name === text) {
					return true;
				}
				return false
			})
			.map((data) => console.log(data));
	}

	handleChangeQuery = ({ target: { value } }) => {
		this.setState({
			query: value,
		})
	}

	renderList() {
		return (
			<TableComponent
				items={dummy}
				schema={schema}
			/>
		);
	}

	render() {
		return (
			<Fragment>
				<section>
					<h2>ObservableEventFilter</h2>
					<div className='row'>
						<div className='col-sm-12'>
							<input
								type='search'
								value={this.state.query}
								onChange={this.handleChangeQuery}
								id='searchInputld'
							/>

						</div>
						<div className='col-sm-12'>
							{this.state.query}
						</div>
						<div className='col-sm-12'>
							{this.renderList()}
						</div>
					</div>
				</section>
			</Fragment>
		)
	}
}

export default ObservableEventFilter;
