export const template = (variables, { tpl }) => {
  return tpl`
    ${variables.imports};

    interface componentProps extends SVGProps<SVGSVGElement> {
      fr?: any;
    }

    const ${variables.componentName} = (props: componentProps, ref: Ref<SVGSVGElement>) => (
      ${variables.jsx}
    );
    
    const ForwardRef = forwardRef(${variables.componentName});
    export { ForwardRef as ${variables.componentName} };
  `;
};  