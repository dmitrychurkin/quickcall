import Auth from "@/components/templates/Auth";
import type NextPageWithLayout from "@/components/types/NextPageWithLayout";
import type { ReactElement } from "react";

type Props = {};

const Account: NextPageWithLayout<Props> = () => (
    <div>Protected page</div>
);

Account.getLayout = (page: ReactElement) => (
    <Auth>
        {page}
    </Auth>
);

export default Account;
