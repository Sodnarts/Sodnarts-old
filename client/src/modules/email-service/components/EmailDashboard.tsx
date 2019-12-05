import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'src/common/globals/routes/routes';
import { color } from 'src/common/utils/getColor';
import { SurveyList } from 'src/modules/email-service/components/surveys/SurveyList';
import { Fab } from '@material-ui/core';

const EmailDashboard = () => {
    return (
        <div>
            <SurveyList />
            <Link to={routes.emailService.surveys.new} style={{ position: 'fixed', right: '20px', bottom: '25px' }}>
                <Fab style={{ backgroundColor: color().primary }}>
                    <AddIcon fontSize="large" style={{ color: color().text }} />
                </Fab>
            </Link>
        </div>
    );
};

export { EmailDashboard };
