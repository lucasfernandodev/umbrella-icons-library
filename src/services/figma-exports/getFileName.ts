import { stringToObject } from "../../utils/stringToObject";
import { toCamelCase } from "../../utils/toCamelCase";

/**
 * Verifica se existe a propriedade 'name',
 * Se existe separa e converte a string para camelCase removendo tudo exceto letras e números.
 * @returns uma string formatada em camelCase
 */
export function getFilename(componentName: string): string {
  const name = stringToObject(componentName)["name"];

  if (!name) throw 'String invalid, is required "name" property';

  let filename = toCamelCase(name.trim());

  filename = filename.replace(/[^a-zA-Zà-úÀ-Ú0-9]/gi, "");

  if (/[0-9]/gi.test(filename[0]))
    throw "String invalid, The first character must be a letter";

  return filename;
}
