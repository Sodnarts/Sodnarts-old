import { Button, Paper, Typography, WithStyles, withStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { routes } from 'src/common/globals/routes/routes';
import { color } from 'src/common/utils/getColor';
import { SurveyCard } from 'src/modules/email-service/components/surveys/SurveyCard';
import { styles } from 'src/modules/email-service/styles/EmailStyles';

interface IState {
    hovered: boolean;
}

type IEmail = WithStyles<typeof styles>;
/**
 * @class Email
 * @extends {React.Component<>}
 */
class EmailBase extends React.Component<IEmail, IState> {
    private lang = getLanguageFile();

    constructor(props: IEmail) {
        super(props);
        this.state = {
            hovered: false,
        };
    }

    public toggleHover = () => {
        this.setState({ hovered: !this.state.hovered });
    };

    public renderList = () => {
        return (
            <SurveyCard
                title={this.lang.emailService.card.title}
                body={this.lang.emailService.card.bodyTitle}
                subject={this.lang.emailService.card.bodySubject}
                sentDate={new Date().toLocaleDateString()}
                yes={this.lang.emailService.card.yes}
                no={this.lang.emailService.card.no}
            />
        );
    };

    public render() {
        const { classes } = this.props;

        return (
            <Paper
                className={classes.paper}
                style={{
                    backgroundColor: color().secondary,
                }}
            >
                <Paper style={{ backgroundColor: color().primary, paddingTop: '25px', marginBottom: '35px' }}>
                    <Typography variant="h2" style={{ color: color().secondaryText }} className={classes.title}>
                        {this.lang.emailService.title}
                    </Typography>
                    <div className={classes.subject}>
                        <Typography
                            variant="caption"
                            style={{ color: color().secondaryText }}
                            className={classes.subjectText}
                        >
                            {this.lang.emailService.subject}
                        </Typography>
                    </div>
                </Paper>
                <div className={classes.container}>
                    <div className={classes.body}>
                        <Typography variant="body1" style={{ color: color().text }} className={classes.text}>
                            {this.lang.emailService.send}
                            <br />
                            <br />
                            {this.lang.emailService.view}
                            <br />
                            <br />
                            {this.lang.emailService.create}
                        </Typography>
                    </div>
                    <div style={{ position: 'relative' }}>{this.renderList()}</div>
                </div>
                <Link to={routes.emailService.emailDashboard} style={{ textDecoration: 'none' }}>
                    <Button
                        onMouseEnter={this.toggleHover}
                        onMouseLeave={this.toggleHover}
                        style={
                            !!this.state.hovered
                                ? {
                                      backgroundColor: color().secondary,
                                      borderColor: color().border,
                                      color: color().text,
                                  }
                                : { backgroundColor: color().primary, borderColor: color().border, color: color().text }
                        }
                        className={classes.button}
                    >
                        {this.lang.emailService.getStarted}
                    </Button>
                </Link>
            </Paper>
        );
    }
}

export const Email = withStyles(styles)(EmailBase);
