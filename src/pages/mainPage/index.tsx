import { Title } from "@solidjs/meta";
import MainModule from "~/modules/mainModule";
import Layout from "~/components/layout";

const MainPage = () => {
    return (
        <Layout title={"Базовая страница"}>
            <MainModule />
        </Layout>
    );
};

export default MainPage;
