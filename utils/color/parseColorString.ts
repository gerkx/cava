import Color from 'color';

export const parseColorString = (str: string): string|null => {
    let clr:Color|null = null;
    try {
        clr = Color(str);
        return clr.hex()
    }
    catch {
        if (str.includes(',')) {
            if (str.includes('%')) {
                try {
                    clr = Color(`hsl(${str.split(',').slice(0,3).join(',')})`)
                }
                catch {
                    console.log(`${str} is not a valid css color value.`)
                    return null
                }
            }
            else {
                try {
                    clr = Color(`rgb(${str.split(',').slice(0,3).join(',')})`)
                }
                catch {
                    console.log(`${str} is not a valid css color value.`)
                    return null
                }
            }
        } 
        else {
            try {
                clr = Color('#' + str)
            }
            catch{
                console.log(`${str} is not a valid css color value.`)
                return null
            }
        }
    }
    if (clr) {
        console.log(clr.rgb().string())
        return clr.hex()
    }
    return null
}

