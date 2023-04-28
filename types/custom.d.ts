declare module '*.jpg' {
	const path: string;
	export default path;
}

declare module '*.png' {
	const path: string;
	export default path;
}

declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.yaml' {
  const data: any
  export default data
}

declare module '*.md';