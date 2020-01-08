import React from 'react';
import { getLanguageFile } from 'src/common/globals/languages/lang';

/**
 *
 * @component NotImplemented
 */
const NotImplemented = () => {
    const lang = getLanguageFile();

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{lang.error.codes.fiveO.one}</h1>
        </div>
    );
};

export { NotImplemented };
