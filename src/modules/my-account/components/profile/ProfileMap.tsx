import { withStyles, WithStyles } from '@material-ui/styles';
import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { styles } from 'src/modules/my-account/components/profile/ProfileStyles';

type IProfileMap = WithStyles<typeof styles>;

class ProfileMapBase extends React.Component<IProfileMap> {
    constructor(props: IProfileMap) {
        super(props);

        this.state = {};
    }

    public render() {
        const { classes } = this.props;
        return (
            <div>
                <Map className={classes.map} center={[0, 0]} zoom={4}>
                    <TileLayer
                        attribution="&copy; <a href=\\'http://www.openstreetmap.org/copyright'>OpenStreetMap contributors</a>"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        minZoom={3}
                        maxZoom={17}
                    />
                </Map>
            </div>
        );
    }
}

const ProfileMap = withStyles(styles)(ProfileMapBase);

export { ProfileMap, ProfileMapBase };
