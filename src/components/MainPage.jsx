import "../styles/MainPage.scss";
import LeftNav from "./LeftNav";
import MainPageContent from "./MainPageContent";


function MainPage() {
  return (
    <div className="main-page">
      <LeftNav/>
      <MainPageContent/>
    </div>
  );
}

export default MainPage;
