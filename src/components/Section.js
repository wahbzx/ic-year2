import { Component } from "react";

const Section = ({name, Card}) => {
    return (
        <div className="flex flex-col">
            <div class="text-2xl mt-10 relative flex py-5 items-center">
            <div class="flex-grow border-t border-gray-400"></div>
                <span class="flex-shrink mx-4 text-[#7289da]">{name}</span>
            <div class="flex-grow border-t border-gray-400"></div>
            </div>
            {Card}
        </div>

    );
}
export default Section;

export const Module = ({name}) => {
    return (
        <div className="flex justify-center">
            <h1 className="text-3xl font-bold">{name}</h1>
        </div>
    );
}
