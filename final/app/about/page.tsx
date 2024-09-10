import Card from "@/components/about/Card";
import { FC } from "react";

const About: FC = () => {
    return (
        <>
            <div className="flex flex-row">
                <Card />
                <Card />
            </div>
        </>
    );
};

export default About;