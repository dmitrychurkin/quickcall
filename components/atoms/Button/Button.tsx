import type { ComponentPropsWithRef, FunctionComponent, ReactNode } from 'react';
import { memo } from "react";
import clsx from 'clsx';
import styles from './Button.module.css';

type Props = {
    readonly startIcon?: ReactNode;
    readonly endIcon?: ReactNode;
    readonly component?: 'button' | FunctionComponent<ComponentPropsWithRef<'button'>>;
    readonly variant?: 'contained' | 'text';
    readonly width?: 'full' | 'w-100';
    readonly color?: 'yellow';
    readonly children: Required<ReactNode>;
} & typeof defaultProps & ComponentPropsWithRef<'button'>;

const defaultProps = {
    component: 'button'
};

const Button = ({
    className,
    startIcon,
    endIcon,
    component,
    variant,
    width,
    color,
    children,
    ...restProps
}: Props) => {
    const Component = component;

    return (
        <Component
            {...restProps}
            className={clsx(
                styles.root,
                !!variant && styles[variant],
                !!color && styles[color],
                !!width && styles[width],
                className
            )}
        >
            {startIcon}
            {children}
            {endIcon}
        </Component>
    );
};

Button.defaultProps = defaultProps;

export default memo(Button);
