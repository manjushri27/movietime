
import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images/pagenotfound.png";
import { useEffect } from "react";
export const PageNotFound = () => {

  useEffect(()=>{
    document.title =`Page Not Found / MovieTime`;
  });
  return (
    <main>
        
        <section className="flex flex-col justify-center px-2">
            <div className="flex flex-col items-center my-4">
                <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white"> 404, OOPS!</p>
                <div className="max-w-lg">
                <img src={PageNotFoundImage} className="rounded" alt="page not found"/>
                </div>
                
            </div>
            <div className="flex justify-center my-4">
                <Link to="/">
                
                <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Back to Movietime</button>

                </Link>
               
            </div>
        </section>
    </main>
  )
}
