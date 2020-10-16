import React from "react"
import { BlogCardWrapper, Div } from "../elements/BlogCardElements"
import { H4, P } from "../elements/TypographyElements"

export const BlogCard = ({title, desc, category, date}) => {
    return(
        <BlogCardWrapper>
            <H4 transform="uc" align="center" fontsize="small">{title}</H4>
            <P transform="cap" fontsize="xsmall" align="center">{desc}</P>
            <Div>
                <P transform="uc" fontsize="xsmall" align="center">{category}</P>
                <P fontsize="xsmall" align="center">{date}</P>
            </Div>
        </BlogCardWrapper>
    )
}