import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-1/2 mx-auto mb-10">
    <img src="../../assest/98488-bot-error-404.gif" alt="" className="w-full mx-auto"/>
    <Link to="/"><button className="btn btn-neutral">Return Home</button></Link>
        </div>
    );
};

export default ErrorPage;