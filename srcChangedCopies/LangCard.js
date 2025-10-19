import { useRef } from "react";

export default function LangCard(props) {
  const imgRef = useRef(null);

  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-header">
          <img
            src={props.image}
            ref={imgRef}
            onError={() => {
              imgRef.current.src =
                "https://images.seeklogo.com/logo-png/30/2/github-logo-png_seeklogo-304612.png";
              imgRef.current.alt = "Default: GitHub logo";
            }}
            alt={`${props.name} logo`}
            className="mx-auto d-block mw-100"
            style={{ height: "350px", objectFit: "contain" }}
          />
        </div>
        <div className="card-body">
          <h3>{props.name}</h3>
          <br />
          {props.description}
        </div>
        <div className="card-footer text-secondary">{props.information}</div>
      </div>
    </div>
  );
}
