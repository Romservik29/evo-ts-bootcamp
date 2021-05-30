import { DirWatcher } from './dirwatcher'
import { Importer } from './importer'

const watcher = new DirWatcher()
watcher.watch(__dirname + '/data', 1000)

new Importer().listenCopier(watcher)//listening directory changes and 
                                    //write converted csv in file json