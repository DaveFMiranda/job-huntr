import { useRouteError } from "react-router-dom";
import mario from "/mario.png?url";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <img
        src={mario}
        alt="Description of the image"
        style={{
          width: "auto",
          height: "100vh",
        }}
      />
    </div>
  );
}
