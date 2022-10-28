import { stringToObject } from "../../utils/stringToObject";

type properties = {
  [key: string]: string;
};

export const filterIconByProperty = (
  iconName: string,
  propertiesFilter: properties
) => {
  // Converte o nome do componente em um objeto com as propriedades formatadas
  const properties = stringToObject(iconName);

  if (typeof properties['name'] === "undefined")
    throw `Icon: ${iconName} invalid, not found name property`;

    // Pega os valores da chave e value que vão ser usador para filtrar os icons
  const [key, value]: [string, string] = [
    Object.keys(propertiesFilter)[0],
    Object.values(propertiesFilter)[0],
  ];

  if (properties[key] === value) return true; // Propriedade encontrada
  if (properties[key] !== value) return false;// Propriedade não encontrada
};
