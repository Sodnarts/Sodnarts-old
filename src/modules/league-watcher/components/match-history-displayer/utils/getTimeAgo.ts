export const getTimeAgo = (timeIn: number): string => {
    const time = Date.now() - timeIn;
    const displayTime = time / 1000;
    let MM: number,
        dd: number,
        hh: number,
        mm: number = 0;

    if (displayTime > 30 * 24 * 60 * 60) {
        MM = Math.round(displayTime / (30 * 24 * 60 * 60));
        if (MM > 1) {
            return `${MM} months ago`;
        } else {
            return `One month ago`;
        }
    }

    if (displayTime > 24 * 60 * 60) {
        dd = Math.round(displayTime / (24 * 60 * 60));
        if (dd > 1) {
            return `${dd} days ago`;
        } else {
            return `One day ago`;
        }
    }

    if (displayTime > 60 * 60) {
        hh = Math.round(displayTime / (60 * 60));
        if (hh > 1) {
            return `${hh} hours ago`;
        } else {
            return `One hour ago`;
        }
    }

    if (displayTime > 60) {
        mm = Math.round(displayTime / 60);
        if (mm > 1) {
            return `${mm} minutes ago`;
        } else {
            return `One minute ago`;
        }
    }

    return `${displayTime} seconds ago`;
};
