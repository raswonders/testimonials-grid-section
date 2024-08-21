import data from "./data/testimonials.json";

function App() {
  return (
    <>
      <main>
        {data.testimonials.map((t) => {
          return <h1>{t.name}</h1>;
        })}
      </main>
    </>
  );
}

export default App;
