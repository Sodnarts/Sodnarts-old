export const trimName = (name: string): string => {
    return (
        name
            // tslint:disable-next-line: quotemark
            .replace("'", '')
            .replace(' ', '')
            .replace('.', '')
            .trim()
    );
};
