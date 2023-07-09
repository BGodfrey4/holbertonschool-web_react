import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

export default class CourseListRow extends React.Component {
	constructor(props) {
		super(props);
		this.toggleChecked = this.toggleChecked.bind(this);
		this.state = {
			checked: false
		}
	}

	toggleChecked = () => {
		if (this.state.checked) this.setState({checked: false})
		else this.setState({checked: true});
	}

	render () {
	const styles = StyleSheet.create({
		th: {
			borderBottom: '1px solid lightgrey',
			padding: '0.5rem',
		},

		rowChecked: {
			backgroundColor: '#e6e4e4'
		}
	});

	const headerStyle = '#deb5b545'
	const regularStyle = '#f5f5f5ab'
	const {isHeader, textFirstCell, textSecondCell} = this.props;

		return (
			<tr style={{ backgroundColor: isHeader ? headerStyle : regularStyle}}
				className={this.state.checked ? css(styles.rowChecked) : null}>
				{isHeader && textSecondCell === null && (
					<th className={`th ${css(styles.th)}`}
						colSpan={2}>{textFirstCell}</th>
				)}
				{isHeader && textSecondCell && (
					<>
						<th className={`th ${css(styles.th)}`}>{textFirstCell}</th>
						<th className={`th ${css(styles.th)}`}>{textSecondCell}</th>
					</>
				)}
				{!isHeader && (
					<>
						<td>
							<label>
								<input type='checkbox'
									onChange={() => this.toggleChecked()} />
								{textFirstCell}
							</label>
						</td>
						<td>{textSecondCell}</td>
					</>
				)}
			</tr>
		)
	}
}

CourseListRow.propTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
};
