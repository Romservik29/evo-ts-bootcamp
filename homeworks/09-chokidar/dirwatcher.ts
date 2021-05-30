import * as fs from 'fs';
import { EventEmitter } from 'events';
import * as path from "path";

export class DirWatcher {
    files: string[] = [];
    watchIntervaId: NodeJS.Timer;
    eventEmmiter: EventEmitter;
    constructor() {
        this.eventEmmiter = new EventEmitter()
    }
    watch(dirPath: string, delay: number): void {
        let lastFiles: string[];
        let first: boolean = true;
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
                        this.eventEmmiter.emit('changed')
                    }
                })
        }, delay)
    }
}