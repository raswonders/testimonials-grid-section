import { Testimonial } from "./components/Testimonial";
import data from "./data/testimonials.json";

function App() {
  return (
    <div className="lg:min-h-screen lg:grid lg:place-content-center">
      <main className="max-w-[69.375rem] mx-6 my-20 grid gap-6 lg:gap-[1.875rem] lg:grid-rows-2 lg:grid-cols-4">
        {data.testimonials.map((entry, index) => (
          <Testimonial entry={entry} index={index} key={entry.name} />
        ))}
      </main>
    </div>
  );
}

export default App;
