/**
 *
 * @export
 * @interface IProps
 */
export interface IProps {
    match: any;
    url: string;
    fetchUrl: (url: string) => void;
}
