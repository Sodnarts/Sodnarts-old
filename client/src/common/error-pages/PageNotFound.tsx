import React from 'react';
import { getLanguageFile } from 'src/common/globals/languages/lang';

/**
 *
 * @component PageNotFound
 */
const PageNotFound = () => {
    const lang = getLanguageFile();

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{lang.error.codes.fourO.four}</h1>
        </div>
    );
};

export { PageNotFound };
