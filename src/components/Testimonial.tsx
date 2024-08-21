interface Props {
  entry: {
    [key: string]: string;
  };
}

export function Testimonial({ entry }: Props) {
  return (
    <article className="">
      <div className="">
        <img src="" alt="" className="" />
        <div className="">
          <h2 className="">{entry.name}</h2>
          <h3 className="">{entry.status}</h3>
        </div>
      </div>
      <p className="">{entry.title}</p>
      <p className="">"{entry.text}"</p>
    </article>
  );
}
