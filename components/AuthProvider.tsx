import { Provider } from "./SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";

type Props = {
    children?: React.ReactNode;
}

const AuthProvider = async ({ children }: Props) => {

    const session = await getServerSession(authOptions);

    return <Provider session={session}>
        {children}
    </Provider>;
}


export default AuthProvider