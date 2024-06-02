import Canvas from "widgets/Canvas";
import Toolbar from "widgets/Toolbar";
import { FC } from "react";

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  return (
    <>
      <Toolbar />
      <Canvas />
    </>
  );
};
export default MainPage;
