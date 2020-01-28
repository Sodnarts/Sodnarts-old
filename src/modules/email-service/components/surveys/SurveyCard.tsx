import { Card, CardActions, CardContent, Typography, WithStyles, withStyles } from '@material-ui/core';
import React from 'react';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { color } from 'src/common/utils/getColor';
import { styles } from 'src/modules/email-service/styles/SurveyCardStyles';

interface IProps {
    title: string;
    body: string;
    subject?: string;
    sentDate: string;
    yes: number;
    no: number;
}

type ISurveyCard = IProps & WithStyles<typeof styles>;

class SurveyCardBase extends React.Component<ISurveyCard> {
    public lang = getLanguageFile();

    public render() {
        const { classes, title, body, subject, sentDate, yes, no } = this.props;
        return (
            <Card style={{ border: `1px solid ${color().border}` }} className={classes.card}>
                <CardContent style={{ backgroundColor: color().primary }} className={classes.cardContent}>
                    <Typography
                        style={{ color: color().secondaryText }}
                        className={classes.cardTitle}
                        gutterBottom={true}
                    >
                        {title}
                    </Typography>
                    <Typography style={{ color: color().secondaryText }} gutterBottom={true}>
                        {body} <br /> {!!subject ? subject : ''}
                    </Typography>
                </CardContent>
                <CardContent style={{ backgroundColor: color().primary }}>
                    <Typography style={{ color: color().secondaryText }} gutterBottom={true}>
                        <br />
                        {this.lang.surveys.card.sent} {sentDate}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <p className={classes.cardResponse}>
                        {this.lang.surveys.card.yes} {yes}
                    </p>
                    <p className={classes.cardResponse}>
                        {this.lang.surveys.card.no} {no}
                    </p>
                </CardActions>
            </Card>
        );
    }
}

const SurveyCard = withStyles(styles)(SurveyCardBase);

export { SurveyCard };
