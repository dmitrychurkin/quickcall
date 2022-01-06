import type { PropsWithChildren } from 'react';
import { memo } from 'react';
import Head from '@/components/molecules/Head';
import styles from './Basic.module.css';

type Props = {
    readonly title?: string;
};

const Basic = ({ title, children }: PropsWithChildren<Props>) => (
    <>
        <Head title={title} />
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {children}
            </div>
        </div>
    </>
);

export default memo(Basic);
