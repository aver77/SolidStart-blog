import { Title } from '@solidjs/meta';
import MainModule from '~/modules/mainModule';
import Counter from '~/components/Counter';

const MainPage = () => {
    return (
        <main>
            <Title>Hello World</Title>
            <Counter />
            <MainModule />
        </main>
    );
};

export default MainPage;
