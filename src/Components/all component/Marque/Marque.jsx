import Marquee from "react-fast-marquee";

 

const Marque = () => {
    return (
        <div className="mb-20 bg-cyan-100">
        <div className="bg-slate-100 flex mx-2 md:mx-28 lg:mx-28 mt-6 pl-4 py-2 items-center">
           
            <Marquee className="text-2xl" pauseOnHover={true} speed={100}>
             choise your blog & read, aslo make add your favorite 
            </Marquee>
        </div>
    </div>
    );
};

export default Marque;