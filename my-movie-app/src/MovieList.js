import reactStringReplace from "react-string-replace";

export function MovieList(props) {
  function handleEvent() {
    props.movieDetails(props.id);
  }
  const s = ["what", <strong>sdf</strong>, "name"];

  console.log(s);

  return (
    <>
      <div className="p-1 cursor-pointer" onClick={handleEvent}>
        {reactStringReplace(props.name, props.highlight, (match, i) => {
          return <b className="font-extrabold">{match}</b>;
        })}
      </div>
    </>
  );
}
