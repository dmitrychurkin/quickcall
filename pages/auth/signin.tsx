import { Fragment, ReactElement, useMemo } from "react";
import type { GetServerSideProps } from "next";
import type { ClientSafeProvider, LiteralUnion } from "next-auth/react";
import type NextPageWithLayout from "@/components/types/NextPageWithLayout";
import Basic from "@/components/templates/Basic";
import { getProviders } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";
import styles from '@/styles/Auth.module.css';
import Logo from "@/components/atoms/Logo";
import SigninForm from "@/components/organizms/Forms/Signin";

type Props = {
    readonly providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null
};

const Signin: NextPageWithLayout<Props> = ({ providers }) => {
    const renderStrategies = useMemo(() => new Map<BuiltInProviderType, JSX.Element>()
        .set('credentials', <SigninForm />)
        , []);

    return (
        <div className={styles.root}>
            <div className={styles.main}>
                <Logo
                    shaped
                    linked
                />
                <h1 className={styles.title}>Login to clap</h1>
                <div className={styles.providers}>
                    {/* <Button
                        color='yellow'
                        variant='contained'
                        startIcon={<GoogleLogo />}
                        width='w-100'
                    >
                        Log in with Google
                    </Button> */}
                    {Array.from(renderStrategies, ([providerType, Component]) => Boolean(providers?.[providerType]) && (
                        <Fragment key={providerType}>
                            {Component}
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

Signin.getLayout = (page: ReactElement) => (
    <Basic>
        {page}
    </Basic>
);

export const getServerSideProps: GetServerSideProps = async context => {
    const providers = await getProviders();

    return {
        props: { providers }
    };
}

export default Signin;
