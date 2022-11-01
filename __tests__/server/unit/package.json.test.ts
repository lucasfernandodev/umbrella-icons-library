import { promises as fs } from 'fs';
import path from "path";

const packageEntry = path.resolve("package/umbrella-icons-library/package.json");

async function readFile(filename: string){
  return await fs.readFile(filename, 'utf8');
}


describe('#package.json', () => {
  it("Deve ter a propriedade [type='module']", async () => {
    const data = await readFile(packageEntry) as any;
    const dataParse = JSON.parse(data);
    expect(dataParse.type).toEqual("module");
  })
})
