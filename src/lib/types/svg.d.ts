export interface svgAttr {[key: string]: any} 

export interface parsedSVG {
    attr: svgAttr,
    children: string[],
    classes: any[]
}

interface Position {
    start: number;
    end: number;
}
  
export interface NodeElement extends Position {
    type: "Element";
    name: string;
    children: Position[];
    attributes: {
      name: string;
      value: { raw: any }[];
    }[];
  }