import "./App.css";
import movies from "./assets/movies.json";
import Section from "./components/Section";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        {movies.map((elem) => {
          return (
            <Section
              key={elem.category}
              category={elem.category}
              pix={elem.images}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
//  elem.images.map((elem)=>{

//    })
