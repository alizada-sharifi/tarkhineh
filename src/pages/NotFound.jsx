import { Button } from "../components/buttons";
import { Microscope } from "../components/icons";
import ROUTES from "../router/routePath";

function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center grow py-10">
      <Microscope className="fill-primary size-40" />
      <p className="mt-1 text-lg font-medium text-gray-500 text-pretty sm:text-xl/8">
        {"صحفه مورد نظر یافت نشد"}
      </p>
      <div className="flex items-center justify-center mt-10 gap-x-6">
        <Button href={ROUTES.HOME}>{"بازگشت به صفحه اصلی"}</Button>
      </div>
    </div>
  );
}

export default NotFound;
