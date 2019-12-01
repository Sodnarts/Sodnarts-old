import { Button, Paper, Typography, WithStyles, withStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { getLanguageFile } from 'src/common/globals/languages/lang';
import { routes } from 'src/common/globals/routes/routes';
import { color } from 'src/common/utils/getColor';
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
    constructor(props: IEmail) {
        super(props);
        this.state = {
            hovered: false,
        };
        this.toggleHover = this.toggleHover.bind(this);
        this.renderList = this.renderList.bind(this);
    }

    public toggleHover() {
        this.setState({ hovered: !this.state.hovered });
    }

    public renderList(lang: any) {
        return (
            <div
                style={{ paddingTop: '25px', paddingRight: '5px' }}
                className={this.props.classes.card + ` col m4`}
                key={1}
            >
                <div style={{ position: 'relative', border: `1px solid ${color().border}` }} className="card darken-3">
                    <div style={{ position: 'relative', backgroundColor: color().primary }} className="card-content">
                        <span className="card-title" style={{ color: color().secondaryText }}>
                            {lang.emailService.card.title}
                        </span>
                        <p style={{ color: color().secondaryText }}>
                            {lang.emailService.card.bodyTitle} <br /> {lang.emailService.card.bodySubject}
                        </p>
                        <p style={{ color: color().secondaryText }}>
                            <br />
                            {lang.surveys.card.sent} {new Date().toLocaleDateString()}
                        </p>
                    </div>
                    <div style={{ position: 'relative' }} className="card-action blue-grey darken-1">
                        <a>{lang.emailService.card.yes}</a>
                        <a>{lang.emailService.card.no}</a>
                    </div>
                </div>
            </div>
        );
    }

    public render() {
        const { classes } = this.props;
        const lang = getLanguageFile();

        return (
            <Paper
                className={classes.paper}
                style={{
                    backgroundColor: color().secondary,
                }}
            >
                <Paper style={{ backgroundColor: color().primary, paddingTop: '25px', marginBottom: '35px' }}>
                    <Typography variant="h2" style={{ color: color().secondaryText }} className={classes.title}>
                        {lang.emailService.title}
                    </Typography>
                    <div className={classes.subject}>
                        <Typography
                            variant="caption"
                            style={{ color: color().secondaryText }}
                            className={classes.subjectText}
                        >
                            {lang.emailService.subject}
                        </Typography>
                    </div>
                </Paper>
                <div className={classes.container}>
                    <div className={classes.body}>
                        <Typography variant="body1" style={{ color: color().text }} className={classes.text}>
                            {lang.emailService.send}
                            <br />
                            <br />
                            {lang.emailService.view}
                            <br />
                            <br />
                            {lang.emailService.create}
                        </Typography>
                    </div>
                    <div style={{ position: 'relative' }}>{this.renderList(lang)}</div>
                </div>
                <Link to={routes.emailService.emailDashboard}>
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
                        {lang.emailService.getStarted}
                    </Button>
                </Link>
            </Paper>
        );
    }
}

export const Email = withStyles(styles)(EmailBase);
