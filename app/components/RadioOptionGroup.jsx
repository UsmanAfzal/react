var RadioOptionGroup = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.options.map(function(option) {
					return (
						<RadioOption value="social">Social Media</RadioOption>
					);
				})}
				<RadioOtherOption/>
			</div>
		);
	}
});