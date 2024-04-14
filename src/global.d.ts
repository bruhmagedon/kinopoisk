declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const API_TOKEN: string;
