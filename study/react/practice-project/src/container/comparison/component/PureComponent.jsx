import React from 'react';

class PureComponent extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			counter: 0,
		}
	}

	increaseCounter = () => {
		this.setState({
			counter: this.state.counter + 1,
		})
	}

	decreaseCounter = () => {
		this.setState({
			counter: this.state.counter - 1,
		})
	}

	render() {
		return (
			<section>
				<h2>PureComponent</h2>
				<div className='row'>
					<div className='col-sm-12'>
						<div className='btn-group' role='group' aria-label='Basic example'>
							<button type='button' className='btn btn-secondary btn-success' onClick={this.increaseCounter}>Increment</button>
							<button type='button' className='btn btn-secondary btn-warning' onClick={this.decreaseCounter}>Decrement</button>
						</div>
					</div>
					<div className='col-sm-12'>
						{
							`counter : ${this.state.counter}`
						}
					</div>
				</div>
			</section>
		);
	}
}

export default PureComponent;
