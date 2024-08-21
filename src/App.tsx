import { Testimonial } from "./components/Testimonial";
import data from "./data/testimonials.json";

function App() {
  return (
    <>
      <main>
        {data.testimonials.map((entry) => (
          <Testimonial entry={entry} key={entry.name} />
        ))}
      </main>
    </>
  );
}

export default App;
