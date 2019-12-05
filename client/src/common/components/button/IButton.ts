export interface IButtonProps {
    buttonText: string;
    disabled?: boolean;
    onClick?: () => void;
    hoverable?: boolean;
    backgroundColorPrimary?: string;
    backgroundColorSecondary?: string;
    textColor?: string;
    isRound?: boolean;
    size?: 'small' | 'medium' | 'large';
    leftIcon?: any;
    rightIcon?: any;
    submit?: boolean;
}
