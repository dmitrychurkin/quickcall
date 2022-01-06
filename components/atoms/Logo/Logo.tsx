import type { LinkProps } from 'next/link';
import { memo } from "react";
import Link from 'next/link';
import clsx from 'clsx';
import styles from './Logo.module.css';

type Props = {
    readonly linked?: true;
    readonly shaped?: true;
    readonly className?: string;
    readonly linkProps?: LinkProps;
} & typeof defaultProps;

const defaultProps = {
    linkProps: {
        href: '/'
    }
};

const Logo = ({ className, shaped, linked, linkProps }: Props) => {
    let Component = (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.33301 2.35492L5.33301 29.6451C5.33301 30.6815 6.46364 31.3216 7.35234 30.7884L30.0941 17.1433C30.9573 16.6255 30.9573 15.3745 30.0941 14.8567L7.35234 1.2116C6.46364 0.67838 5.33301 1.31853 5.33301 2.35492ZM18.6663 20.4007L18.6663 11.5994C18.6663 10.5827 17.5742 9.94009 16.6855 10.4338L8.76432 14.8345C7.84991 15.3425 7.84991 16.6575 8.76432 17.1655L16.6855 21.5662C17.5742 22.0599 18.6663 21.4173 18.6663 20.4007Z" fill="#090A33" />
        </svg>
    );

    if (shaped) {
        Component = (
            <div className={clsx(styles.base, styles.shaped, className)}>
                {Component}
            </div>
        );
    }
    if (linked && linkProps) {
        Component = (
            <Link {...linkProps}>
                <a className={clsx(styles.linked, className)}>{Component}</a>
            </Link>
        );
    }

    return Component;
};

Logo.defaultProps = defaultProps;

export default memo(Logo);
