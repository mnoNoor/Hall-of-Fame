import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About(){
    return(
        <>
        <Header/>
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">About Us</h1>
            <p className="text-xl mb-4">
                Welcome to Hall of Fame! A place designed to bring together the greatest personalities and celebrities.
            </p>
            <p className="text-xl mb-4">
                We're here to create a place for the world to remember them, each one with their accomplishments and the things they did to change the world.
            </p>
            <p className="text-xl mb-4">
                And the best part? You can contribute too — add the personalities you believe deserve a place here.
            </p>
        </div>
        <Footer/>
        </>
    )
}