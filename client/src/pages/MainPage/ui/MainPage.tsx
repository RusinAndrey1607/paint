import Canvas from 'widgets/Canvas';
import Toolbar from 'widgets/Toolbar';
import { FC } from 'react';


interface MainPageProps {
}

const MainPage: FC<MainPageProps> = () => (
  <>
    <Toolbar />
    <Canvas />
  </>
);

export default MainPage;