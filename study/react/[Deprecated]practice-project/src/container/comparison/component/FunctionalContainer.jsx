import React from 'react';
import PropTypes from 'prop-types';

const FunctionalComponent = (props) => {
	return (
		<section>
			<h2>FunctionalComponent</h2>
			<div className='row'>
				<div className='col-sm-12'>
					<div className='btn-group' role='group' aria-label='Basic example'>
						<button type='button' className='btn btn-secondary btn-success' onClick={props.increaseCounter}>Increment</button>
						<button type='button' className='btn btn-secondary btn-warning' onClick={props.decreaseCounter}>Decrement</button>
					</div>
				</div>
				<div className='col-sm-12'>
						{
							`counter : ${props.counter}`
						}
					</div>
					<div className='col-sm-12'>
						{
							`renderCounter : ${props.renderCounter}`
						}
					</div>
			</div>
		</section>
	);
}

FunctionalComponent.propTypes = {
	increaseCounter: PropTypes.func.isRequired,
	decreaseCounter: PropTypes.func.isRequired,
	counter: PropTypes.number.isRequired,
	renderCounter: PropTypes.number.isRequired,
}

class WarpperFunctionalContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			counter: 0,
			renderCounter: 0,
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
				<FunctionalComponent
					increaseCounter={this.increaseCounter}
					decreaseCounter={this.decreaseCounter}
					counter={this.state.counter}
					renderCounter={this.state.renderCounter}
				/>
			</section>
		);
	}
}

export default WarpperFunctionalContainer;

