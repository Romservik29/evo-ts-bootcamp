import { DirWatcher } from './dirwatcher'
import { Importer } from './importer'
import { EventEmitter } from 'events'
const watcher = new DirWatcher(new EventEmitter())
watcher.watch(__dirname + '/data', 1000)

new Importer().listenCopier(watcher)//listening directory changes and 
                                    //write converted csv in file json