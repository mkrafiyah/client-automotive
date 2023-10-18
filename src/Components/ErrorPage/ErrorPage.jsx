import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex min-h-screen justify-center items-center border">
            <div className="  bg-sky-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/DLkkXtM/not-found.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">OOppss!</h2>
                    <p>Sorry This Page is not found</p>
                    <div className="card-actions">
                      <Link to='/'>  <button className="btn text-white bg-sky-400">Go Back</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;