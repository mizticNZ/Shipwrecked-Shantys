import { Router } from 'express'

import * as db from '../db/playlist.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const playlist = await db.getPlaylist()

    res.json({ playlist: playlist.map((song) => song.name) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
