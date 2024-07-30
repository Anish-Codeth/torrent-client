import {getpeers} from './modules/tracker.js'
import { peerDownload } from './modules/download.js'
import 'dotenv/config'
import { readTorrentFile } from './modules/utils.js'
import process from 'node:process'

// getpeers('espresso.torrent',peers=>{
//     console.log('list of peers: ',peers)
// })

const main=(a,b)=>{
    process.env.filename=process.argv[2]
    console.log(process.env.filename)
peerDownload(process.argv[2])


}
main(process.argv[2])