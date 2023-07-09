import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import AppContext from '../App/AppContext';

export default function Footer() {
	const { user } = React.useContext(AppContext);

  return (
		<React.Fragment>
			<p>Copyright {getFullYear()} - {getFooterCopy(0)}</p>
			{user.isLoggedIn ? (
				<p>
					<a href='#'>Contact Us</a>
				</p> ) : (
					null
				)
			}
		</React.Fragment>
  );
}
