import AboutPage from "./layout/components/about/page";
import HomePage from "./layout/components/home/page";
import ProjectsPage from "./layout/components/project/page";
import Footer from "./layout/footer/page";
import Header from "./layout/header/page";

export default function Home() {
  return (
    <div >
      <Header/> 
       <HomePage/>
       <AboutPage/>
       <ProjectsPage/>
      <Footer/>
    </div>
  );
}
