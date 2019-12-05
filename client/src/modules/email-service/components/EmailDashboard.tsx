import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';
import { color } from 'src/common/utils/getColor';
import { SurveyList } from 'src/modules/email-service/components/surveys/SurveyList';
import { SurveyNew } from 'src/modules/email-service/components/surveys/SurveyNew';

const EmailDashboard = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const renderContent = () => {
        return !!open ? <SurveyNew handleOpen={handleOpen} /> : null;
    };
    return (
        <div>
            <SurveyList />
            <Fab
                style={{ backgroundColor: color().primary, position: 'fixed', right: '20px', bottom: '25px' }}
                onClick={handleOpen}
            >
                <AddIcon fontSize="large" style={{ color: color().text }} />
            </Fab>
            {renderContent()}
        </div>
    );
};

export { EmailDashboard };
