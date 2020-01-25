import {
    createStyles,
    Paper,
    Table as MUITable,
    Toolbar,
    Tooltip,
    Typography,
    withStyles,
    WithStyles,
} from '@material-ui/core/';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InfoIcon from '@material-ui/icons/Info';
import React from 'react';
import { IRow } from 'src/common/components/table/ITable';

const styles = () =>
    createStyles({
        paper: {
            margin: '0px',
            padding: '0px',
            width: '100%',
        },
        table: {
            width: '100%',
        },
    });

interface IProps {
    headers?: string[];
    data: IRow[];
    title?: string;
    tooltip?: string;
    backgroundColor?: string;
}

type ITable = IProps & WithStyles<typeof styles>;

/**
 * Generic Table component using MUI table, to allow customized tables
 * Uses props from parent component:
 *
 * headers?: string[]
 * data: IRow[]
 * title?: string
 *
 * @class TableBase
 * @extends {React.Component<ITable>}
 */
class TableBase extends React.Component<ITable> {
    constructor(props: ITable) {
        super(props);

        this.state = {};

        this.renderHeaders = this.renderHeaders.bind(this);
        this.renderRows = this.renderRows.bind(this);
        this.getRowData = this.getRowData.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.renderTooltip = this.renderTooltip.bind(this);
    }

    /**
     * Sets the table title
     *
     * @returns
     * @memberof TableBase
     */
    public getTitle() {
        if (!!this.props.title) {
            return (
                <Toolbar>
                    <div>
                        <Typography variant="h6" id="tableTitle">
                            {this.props.title}
                        </Typography>
                    </div>
                </Toolbar>
            );
        } else {
            return null;
        }
    }

    /**
     * Renders an array of <TableCell> headers to be used in table
     *
     * @returns
     * @memberof TableBase
     */
    public renderHeaders() {
        if (!this.props.headers) {
            return null;
        }

        const headers: JSX.Element[] = [];
        headers.push(<TableCell key={0} />);
        this.props.headers.forEach((header) => {
            headers.push(<TableCell key={header}>{header}</TableCell>);
        });

        return headers;
    }

    /**
     * Render an array of <TableRow>, each containing an array of <TableCell>
     *
     * @returns
     * @memberof TableBase
     */
    public renderRows() {
        const rows: JSX.Element[] = [];
        this.props.data.forEach((row: IRow) => {
            rows.push(<TableRow key={'REACT_KEY_PREFIX_' + row.id}>{this.getRowData(row.data)}</TableRow>);
        });

        return rows;
    }

    /**
     * Returns an array of <TableCell> containing the actual data to be filled in each <TableRow>
     *
     * @param {*} row
     * @returns
     * @memberof TableBase
     */
    public getRowData(row: any) {
        if (!row) {
            return;
        }

        const rowFields: JSX.Element[] = [];
        const properties = Object.getOwnPropertyNames(row);
        for (let i = 0; i < properties.length; i++) {
            rowFields.push(<TableCell key={i}>{row[properties[i]]}</TableCell>);
        }

        return rowFields;
    }

    public renderTooltip() {
        if (!this.props.tooltip) {
            return null;
        }

        return (
            <Tooltip style={{ alignSelf: 'center', opacity: 0.7, height: '20px' }} title={this.props.tooltip}>
                <InfoIcon />
            </Tooltip>
        );
    }

    public render() {
        const { classes, backgroundColor } = this.props;
        return (
            <Paper className={classes.paper} style={{ backgroundColor: !!backgroundColor ? backgroundColor : 'white' }}>
                <div style={{ display: 'flex' }}>
                    {this.getTitle()}
                    {this.renderTooltip()}
                </div>
                <MUITable className={classes.table} size="small">
                    <TableHead>
                        <TableRow>{this.renderHeaders()}</TableRow>
                    </TableHead>
                    <TableBody>{this.renderRows()}</TableBody>
                </MUITable>
            </Paper>
        );
    }
}

const Table = withStyles(styles)(TableBase);
export { Table };
