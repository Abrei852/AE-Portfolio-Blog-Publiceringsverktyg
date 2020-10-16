import React from "react"
import { JobWrapper, Div } from "../elements/JobElements"
import { H3, H4, P} from "../elements/TypographyElements"

export const Job = ({position, company, desc, date}) => {
    return(
        <JobWrapper>
            <H3 transform="uc">{position}</H3>
            <H4 transform="uc">{company}</H4>
            <P>{date}</P>
            {desc.map(item => {
                return(
                    <Div key={item.id}>
                    <P>{item.name}</P>
                </Div>
                )
            })}
        </JobWrapper>
    )
}
