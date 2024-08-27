import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center p-4">
                <h1 className="text-4xl font-bold mb-10">Oops!</h1>
                <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <p className="mt-20">
                    Go home <Link className="font-bold" to={`/`}> here</Link>
                </p>
            </div>
        </div>
    );
}
