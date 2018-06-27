import React, { Component, Fragment } from 'react';

import { interval } from 'rxjs';
import { take, combineAll, map } from 'rxjs/operators';

class CombineAllContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			result: [],
		}

		const source = interval(1000).pipe(take(2));
		const example = source.pipe(map(val => interval(1000).pipe(map(i => `Result (${val}): ${i}`), take(5))));
		const combined = example.pipe(combineAll());
		const subscribe = combined.subscribe(val => this.setState({ result: [ ...this.state.result, val ]}));
	}


	render() {
		return (
			<Fragment>
				<section>
					<h2>CombineAllContainer</h2>
					<div className='row'>
						<div className='col-sm-12'>
							{
								this.state.result.map((result, idx) => {
									return <div key={idx}>
										{result}
									</div>;
								})
							}
						</div>
					</div>
				</section>
			</Fragment>
		)
	}
}

export default CombineAllContainer;
