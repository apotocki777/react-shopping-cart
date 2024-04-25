import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-52">
        <h1 className="text-9xl text-black">Page Not Found</h1>
        <Link to="/">
          <h2 className="text-5xl font-bold text-primary underline">
            E.T. Go Home!
          </h2>
        </Link>
      </div>
    </div>
  );
}
