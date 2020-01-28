import { IParticipant } from 'src/modules/league-watcher/redux/actions/IActions';

export const calculateKDA = (player: IParticipant): string => {
    let kda = '';

    if (player.deaths === 0) {
        if (player.kills + player.assists > 0) {
            kda = 'Perfect!';
        } else {
            kda = '0.00';
        }
    } else {
        kda = parseFloat(((player.kills + player.assists) / player.deaths).toString()).toFixed(2);
    }

    return kda;
};
