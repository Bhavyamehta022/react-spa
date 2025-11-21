import { langConst } from "../utils/langConst.js";

export const About =({lang})=>{

    return (
        <div>
            <h1>{langConst[lang].title}</h1>
            <h2>{langConst[lang].desc}</h2>
        </div>
    )
}