export default function Title({
  text,
  title,
}: {
  text: string;
  title: string;
}) {
  return (
    <div className="Title title">
      <div className="container">
        {" "}
        <h1 className="title__heading">{title}</h1>
        <div className="title__subheading">{text}</div>
      </div>
    </div>
  );
}
