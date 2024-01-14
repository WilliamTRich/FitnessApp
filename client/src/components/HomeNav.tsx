import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function HomeNav() {
  return (
    <div className={"flex h-1/6 px-4 py-2 w-full justify-between items-center"}>
      <h1
        className={
          "flex h-full w-1/3 ml-12 items-center font-extrabold text-4xl"
        }
      >
        Fitness App
      </h1>
      <div className={"flex h-full w-1/3 items-center justify-center gap-4"}>
        <Link to="/login">
          <Button variant={"default"} size={"lg"} className="text-xl">
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button variant={"default"} size={"lg"} className="text-xl">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomeNav;
