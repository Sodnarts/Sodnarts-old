import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';
import { color, IColor } from 'src/common/utils/getColor';
import { SurveyFormDialog } from 'src/modules/email-service/components/surveys/SurveyFormDialog';
import { SurveyList } from 'src/modules/email-service/components/surveys/SurveyList';

const EmailDashboard = () => {
    const colorValues: IColor = color();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const renderContent = () => {
        return !!open ? <SurveyFormDialog handleOpen={handleOpen} /> : null;
    };
    return (
        <div>
            <SurveyList />
            <Fab
                style={{ backgroundColor: colorValues.primary, position: 'fixed', right: '20px', bottom: '25px' }}
                onClick={handleOpen}
            >
                <AddIcon fontSize="large" style={{ color: colorValues.text }} />
            </Fab>
            {renderContent()}
        </div>
    );
};

export { EmailDashboard };
