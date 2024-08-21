interface Props {
  entry: {
    [key: string]: string;
  };
  index: number;
}

const testimonialColor = [
  "text-white bg-[#733FC8]",
  "text-white bg-dark-gray",
  "text-dark-gray bg-white",
  "text-white bg-[#19202D]",
  "text-white bg-dark-gray",
];

export function Testimonial({ entry, index }: Props) {
  return (
    <article
      className={`p-8 -z-20 relative flex flex-col gap-4 rounded-lg shadow-[40px_60px_50px_-47px_rgba(72,85,106,0.25)] ${testimonialColor[index % testimonialColor.length]}`}
    >
      {index === 0 && (
        <img
          src="/assets/bg-pattern-quotation.svg"
          alt=""
          width="104"
          height="102"
          className="absolute top-0 right-6 -z-10"
        />
      )}
      <div className="flex space-x-4 items-center">
        <img
          src={entry.image_url}
          alt={entry.image_alt}
          className="w-7 h-7 rounded-full border-2 border-gray-500"
        />
        <div className="flex flex-col gap-1">
          <h2 className="font-medium text-sm">{entry.name}</h2>
          <h3 className="font-medium text-xs opacity-50">{entry.status}</h3>
        </div>
      </div>
      <p className="font-semibold text-xl">{entry.title}</p>
      <p className="font-medium text-sm opacity-70">"{entry.text}"</p>
    </article>
  );
}
