export const formFields = (lang: any) => [
    { label: lang.surveys.form.title.label, name: lang.surveys.form.title.name, error: lang.surveys.form.title.error },
    {
        error: lang.surveys.form.subject.error,
        label: lang.surveys.form.subject.label,
        name: lang.surveys.form.subject.name,
    },
    { label: lang.surveys.form.body.label, name: lang.surveys.form.body.name, error: lang.surveys.form.body.error },
    {
        error: lang.surveys.form.emails.error,
        label: lang.surveys.form.emails.label,
        name: lang.surveys.form.emails.name,
    },
];
