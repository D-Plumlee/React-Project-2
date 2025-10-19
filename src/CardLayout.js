import LangCard from "./LangCard.js";
import { useContext } from "react";
import { JsonContext } from "./JsonContext.js";

export default function CardLayout() {
  const curVal = useContext(JsonContext);

  const languages = curVal.contextVal.Languages;

  const arr = [];
  const len = languages.length;
  const threes = Math.floor(len / 3);

  for (let i = 0; i < threes; i++) {
    arr.push(
      <div className="row mx-4 my-4">
        <LangCard {...languages[3 * i]} />
        <LangCard {...languages[3 * i + 1]} />
        <LangCard {...languages[3 * i + 2]} />
      </div>
    );
  }
  if (len % 3 === 1) {
    arr.push(
      <div className="row mx-4 my-4">
        <div className="col"></div>
        <LangCard {...languages[languages.length - 1]} />
        <div className="col"></div>
      </div>
    );
  } else if (len % 3 === 2) {
    arr.push(
      <div className="row mx-4 my-4">
        <div className="col-md-2"></div>
        <LangCard {...languages[languages.length - 2]} />
        <LangCard {...languages[languages.length - 1]} />
        <div className="col-md-2"></div>
      </div>
    );
  }

  return <div>{arr}</div>;
}
