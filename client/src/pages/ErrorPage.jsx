import { useRouteError } from "react-router-dom";
import mario from "../../public/mario.png?url";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <img src={mario} alt="Description of the image" style={{
        width: "auto",
        height: "100vh"
      }
}/>
     
        {/* <i>{error.statusText || error.message}</i> */}
      
    </div>
  );
}