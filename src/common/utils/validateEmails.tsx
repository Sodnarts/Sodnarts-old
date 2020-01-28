import { getLanguageFile } from 'src/common/globals/languages/lang';

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateEmails = (emails: string): string => {
    const invalidEmails = emails
        .split(',')
        .map((email) => email.trim())
        .filter((email) => re.test(email) === false);

    if (invalidEmails.length) {
        return getLanguageFile().surveys.invalidEmails + invalidEmails;
    }
    return '';
};
