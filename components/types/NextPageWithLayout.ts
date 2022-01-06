import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
};

export default NextPageWithLayout;
