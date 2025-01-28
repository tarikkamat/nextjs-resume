import Header from '../components/Header';
import PersonalInfo from '../components/AboutMe';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Donation from '../components/Donation';

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Header />
          <PersonalInfo />
	  <Donation />
          <Education />
          <Experience />
          <Skills />
        </main>
        <Footer />
      </div>
    </>
  );
}
