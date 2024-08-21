import { Testimonial } from "./components/Testimonial";
import data from "./data/testimonials.json";

function App() {
  return (
    <>
      <main className="mx-6 my-20 grid gap-6">
        {data.testimonials.map((entry, index) => (
          <Testimonial entry={entry} index={index} key={entry.name} />
        ))}
      </main>
    </>
  );
}

export default App;
