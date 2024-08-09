import Header from '../components/Header';
import PersonalInfo from '../components/AboutMe';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Header />
          <PersonalInfo />
          <Education />
          <Experience />
          <Skills />
        </main>
        <Footer />
      </div>
    </>
  );
}