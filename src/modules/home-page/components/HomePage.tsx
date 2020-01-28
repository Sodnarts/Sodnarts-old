import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'src/common/globals/routes/routes';
/**
 * // TODO: Fix me
 *
 * @class HomePage
 * @extends {React.Component}
 */
const HomePage = () => (
    <div>
        <div style={{ textAlign: 'center' }}>
            <h1>Welcome!</h1>
            <p>On this page you can view different modules.</p>
            <Link to={routes.home.home} className="left brand-logo">
                <h1>Home Page</h1>
            </Link>
            <Link to={routes.emailService.home} className="left brand-logo">
                <h1>Email services</h1>
            </Link>
        </div>
    </div>
);

export { HomePage };
/**
 * In order to successfully navigate, store needs to be updated and passed
 * to RouterComponent through mapStateToProps();
 */
