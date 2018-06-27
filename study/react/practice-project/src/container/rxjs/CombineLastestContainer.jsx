import React, { Component, Fragment } from 'react';

import { Observable } from 'rxjs';

import dummy from './_dummy.json';

class CombineLastestContainer extends Component {
	constructor(props) {
		super(props);
		this.sumObserver = {
			sum: 0,
			next(value) {
				console.log('Adding: ' + value);
				this.sum = this.sum + value;
			},
			complete() {
				console.log('Sum equals: ' + this.sum);
			}
		};
		const test= Observable.of(1, 2, 3).subscribe(this.sumObserver);
	}

	render() {
		return (
			<Fragment>
				<section>
					<h2>CombineLastestContainer</h2>
					<div className='row'>
						<div className='col-sm-12'>
						</div>
					</div>
				</section>
			</Fragment>
		)
	}
}

export default CombineLastestContainer;
