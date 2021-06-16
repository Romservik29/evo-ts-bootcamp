import * as fs from 'fs';
import { EventEmitter } from 'events';
import * as path from "path";

export class DirWatcher {
    files: string[] = [];
    watchIntervaId: NodeJS.Timer;
    _eventEmmiter: EventEmitter;
    constructor(em: EventEmitter) {
        this._eventEmmiter = em
    }
    watch(dirPath: string, delay = 100): void {
        let lastFiles: string[];
        this.watchIntervaId = setInterval(() => {
            fs.readdir(
                dirPath, async (err, files: string[]) => {
                    if (err) {
                        clearInterval(this.watchIntervaId)
                    }
                    const newFiles: string[] = []
                    for (const file of files) {
                        newFiles.push(path.join(dirPath, file))
                    }
                    lastFiles = newFiles
                    if (JSON.stringify(this.files) !== JSON.stringify(lastFiles)) {
                        this.files = newFiles
                        this._eventEmmiter.emit('changed')
                    }
                })
        }, delay)
    }
}