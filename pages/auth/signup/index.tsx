import Logo from "@/components/atoms/Logo";
import Basic from "@/components/templates/Basic";
import type NextPageWithLayout from "@/components/types/NextPageWithLayout";
import styles from '@/styles/Auth.module.css';

const Signup: NextPageWithLayout = () => {
    return (
        <div className={styles.root}>
            <div className={styles.main}>
                <Logo
                    shaped
                    linked
                />
                <h1 className={styles.title}>Welcome to clap</h1>
                <h3 className={styles.subtitle}>Create your account and start recording and sharing videos</h3>
                <div className={styles.providers}>

                </div>
            </div>
        </div>
    );
};

Signup.getLayout = (page: JSX.Element) => (
    <Basic>
        {page}
    </Basic>
);

export default Signup
