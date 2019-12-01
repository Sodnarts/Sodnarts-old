export interface IButtonProps {
    buttonText: string;
    disabled?: boolean;
    onClick?: () => void;
    hoverable?: boolean;
    backgroundColorPrimary?: string;
    backgroundColorSecondary?: string;
    textColor?: string;
}
