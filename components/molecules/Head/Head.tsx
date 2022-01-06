/* eslint-disable @next/next/no-page-custom-font */
import HeadNext from 'next/head';
import { memo } from 'react';

type Props = {
    readonly title?: string;
};

const Head = ({ title }: Props) => (
    <HeadNext>
        <title>{title}</title>
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
        />
    </HeadNext>
);

export default memo(Head);
