import "./styles.css";

export default function App() {
  const food = "apple";
  const age = 11;
  const skills = ["node", "html", "css", "react", "javascript"];
  return (
    <>
      <div>
        {age > 12
          ? "To eat apple you have tobe above 12 years"
          : "you are too small to eat apple"}
      </div>

      {/* <ul>{
        skills.map((item)=>{
          return <li>{item}</li>
        })
      }</ul> */}

      {/* <Skill/> */}

      <div>
        {skills.map((e) => {
          return <Skill skill={e} />; // in this skill = {e} is key value pair skill is key value is e
        })}
      </div>
    </>
  );
}

// Component
// we can create custom element.
// we can also create custom attribute.
function Skill({ skill }) {
  return <li>skill: {skill}</li>;
}
