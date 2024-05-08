import Canvas from '@/widgets/Canvas';
import Toolbar from '@/widgets/Toolbar';
import { FC } from 'react';


interface MainPageProps {
}

const MainPage: FC<MainPageProps> = () => (
  <div>
    <Toolbar />
    <Canvas />
  </div>
);

export default MainPage;