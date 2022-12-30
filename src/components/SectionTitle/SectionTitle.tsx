import React from "react";
import { Link } from "react-router-dom";
import { TitleWrapper } from "@/components/SectionTitle/SectionTitle.style";

type SectionTitlePropsType = {
    title: string;
    moreLink?: string;
};

function SectionTitle(props: SectionTitlePropsType) {
    return (
        <TitleWrapper>
            <div className="title">{props.title}</div>
            {props.moreLink && (
                <div className="more-link text-decoration">
                    <Link to={props.moreLink}>全部&#62;</Link>
                </div>
            )}
        </TitleWrapper>
    );
}

export default SectionTitle;
