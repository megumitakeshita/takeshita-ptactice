import { CssModules } from "./src/components/CssModules";

CssModules.exports ={
    style:{
        postcss:{
            plugins:[
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}