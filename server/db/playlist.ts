import connection from './connection.ts'
import { Playlist } from '../../models/playlist.ts'

export async function getPlaylist(db = connection): Promise<Playlist[]> {
  return db('playlist').select()
}
