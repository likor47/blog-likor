import React from "react";

const Highlight = (props: any) => {
    const {filter, str} = props
    if (!filter) return str
    const regexp = new RegExp(filter, 'ig')
    const matchValue = str.match(regexp)
    if (matchValue) {
        return str.split(regexp).map((s: any, index: number, array: []) => {
            if (index < array.length - 1 ) {
                const c = matchValue.shift()
                return <>{s}<span key={index} style={{backgroundColor: '#c7b789'}}>{c}</span></>
            }
            return s
        })
    }
    return str
}

export default Highlight;