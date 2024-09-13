import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
const App = () => {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
