import type { ComponentPropsWithRef, ReactNode } from 'react';
import { memo } from "react";
import clsx from 'clsx';
import styles from './TextField.module.css';

type Props = {
    readonly label?: ReactNode;
} & ComponentPropsWithRef<'input'>;

const TextField = ({
    className,
    label,
    width,
    id,
    ...restProps
}: Props) => (
    <div
        className={clsx(
            styles.root,
            className
        )}
    >
        {!!label && (
            <label
                className={styles.label}
                htmlFor={id}
            >
                {label}
             </label>
        )}
        <input
            className={styles.input}
            {...restProps}
            id={id}
        />
    </div>
);

export default memo(TextField);
