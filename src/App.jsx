import "./App.css";
import data from "./assets/movies.json";
import Section from "./components/section";

function App() {
  console.log("tout va bien jusqu'ici");

  return (
    <div className="App">
      <h1>Netflix</h1>
      {data.map((categ, index) => {
        return (
          <Section
            key={index}
            category={categ.category}
            images={categ.images}
          />
        );

        //   <div>
        //     <h2> {categ.category}</h2>
        //     {categ.images.map((image) => {
        //       return <img src={image} alt="" />;
        //     })}
        //   </div>
        // );
      })}
    </div>
  );
}

export default App;
