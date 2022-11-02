export const template = (variables, { tpl }) => {

  return tpl`
    ${variables.imports};

    interface componentProps extends SVGProps<SVGSVGElement> {
      ref?: Ref<SVGSVGElement>;
      fr?: any;
    }

    const ${variables.componentName} = ({ref,fr=undefined, ...props}: componentProps) => (
      ${variables.jsx}
    );
    
    ${variables.exports};
  `;
};  