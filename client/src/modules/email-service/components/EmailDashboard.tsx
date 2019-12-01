import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'src/common/globals/routes/routes';
import { color } from 'src/common/utils/getColor';
import { SurveyList } from 'src/modules/email-service/components/surveys/SurveyList';

const EmailDashboard = () => {
    return (
        <div>
            <SurveyList />
            <div className="fixed-action-btn">
                <Link
                    to={routes.emailService.surveys.new}
                    style={{ backgroundColor: color().primary }}
                    className="btn-floating btn-large"
                >
                    <i style={{ color: color().text, fontSize: '30px' }} className="material-icons">
                        add
                    </i>
                </Link>
            </div>
        </div>
    );
};

export { EmailDashboard };
