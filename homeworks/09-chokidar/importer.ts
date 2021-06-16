import { DirWatcher } from "./dirwatcher";
import * as csv from 'csvtojson';
import * as fs from "fs";
import * as path from "path";

export class Importer {
    listenCopier(watcher: DirWatcher): void {
        const convertedFiles: string[] = [];
        watcher
            ._eventEmmiter
            .on('changed', () => {
                for (const file of watcher.files) {
                    const fileName = path.basename(file, path.extname(file))
                    if (path.extname(file) === '.csv' && convertedFiles.find((f) => fileName === f) === undefined) {
                        convertedFiles.push(fileName)
                        const pathJson = path.join(path.dirname(file), fileName + '.json')
                        this.import(file)
                        .then((res) => this.copyImport(JSON.stringify(res), pathJson))
                    }
                }
            })
    }

    private async import(filePath: string) {
        const file = await fs.promises.readFile(filePath)
        return csv().fromString(file.toString())
    }
    private importSync(fileName: string) {
        const file = fs.readFileSync(fileName)
        return csv().fromString(file.toString())
    }
    private copyImport(file: string, fileDist: string): void {
        fs.writeFileSync(fileDist, file)
    }
}