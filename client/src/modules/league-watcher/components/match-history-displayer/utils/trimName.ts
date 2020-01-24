export const trimName = (name: string) => {
    return (
        name
            // tslint:disable-next-line: quotemark
            .replace("'", '')
            .replace(' ', '')
            .replace('.', '')
            .trim()
    );
};
