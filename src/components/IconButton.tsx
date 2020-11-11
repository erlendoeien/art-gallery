// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react';
import styles from './IconButton.module.css';

interface IProps {
    onClickHandler: (event: React.MouseEvent) => void;
    buttonClassName?: string;
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
/**
 * Reuseable icon button component
 * @param props A clickHandler, the SVG and additional classes
 */
const IconButton = (props: IProps): JSX.Element => {
    const { buttonClassName, onClickHandler, Icon } = props;
    return (
        <button
            type="button"
            className={`${buttonClassName} ${styles.iconButton}`}
            onClick={onClickHandler}
        >
            <Icon />
        </button>
    );
};

IconButton.defaultProps = { buttonClassName: '' };

export default IconButton;
