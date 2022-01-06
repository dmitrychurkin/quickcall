import type { ReactNode } from 'react';
import { useSession } from "next-auth/react";
import { memo } from "react";

type Props = {
    readonly children: Required<ReactNode>;
};

const Auth = ({ children }: Props) => {
    const { status } = useSession({ required: true });

    return (
        <>
         {(status === 'authenticated') && children}
        </>
    );
};

export default memo(Auth);
