import Aos from "aos";
import { useEffect } from "react";

const SectionTitle = ({heading, subHeading, moto}) => {
    useEffect(()=>{
        Aos.init()
    })
    return (
        <div data-aos="fade" className="text-center mb-10 mt-20">
        <p className="text-warning">{subHeading}</p>
        <h1 className="text-5xl font-bold text-primary">{heading}</h1>
        <div className="divider w-1/2 mx-auto">{moto}</div>
        </div>
    );
};

export default SectionTitle;