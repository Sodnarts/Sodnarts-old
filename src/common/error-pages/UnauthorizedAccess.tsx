import React from 'react';
import { getLanguageFile } from 'src/common/globals/languages/lang';

/**
 *
 * @component UnauthorizedAccess
 */
const UnauthorizedAccess = () => {
    const lang = getLanguageFile();

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{lang.error.codes.fourO.one}</h1>
        </div>
    );
};

export { UnauthorizedAccess };
