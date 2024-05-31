import ShipwreckedShantys from '../styles/ShipwreckedShantys.png'
import '../styles/lyrics.css'

import React, { Component, useEffect, useRef } from 'react'
import gsap from 'gsap'

const Lyrics = () => {
  const lyr = useRef()
  const title = useRef()
  const content = useRef()

  // useEffect(() => {
  //   gsap.to(lyr.current, { opacity: 1, delay: 1, duration: 4.5 })
  //   gsap.to(lyr.current, { opacity: 0, delay: 5.5, duration: 1.5 })
  // }, [])

  useEffect(() => {
    const t1 = new gsap.timeline()

    t1.to(lyr.current, { opacity: 1, delay: 1, duration: 4.5 })
      .to(lyr.current, { opacity: 0, duration: 1.5 })
      .set(title.current, { opacity: 1, scale: 2.75 })
      .to(title.current, { scale: 0.5, ease: 'power2', duration: 8 })
      .to(title.current, { opacity: 0, duration: 1.5 }, '-=1.5')
      .to(content.current, { top: '-170%', duration: 200 })
  }, [])

  return (
    <div className="container">
      <section className="lyrics" ref={lyr}>
        <p>Let's sing!</p>
      </section>
      <section className="title" ref={title}>
        <img src={ShipwreckedShantys} alt="space shipwrecked shantys" />
      </section>
      <section className="crawl">
        <div className="content" ref={content}>
          <h1 className="artist">Kanye</h1>
          <h2 className="song-title">Lift Yourself</h2>
          <p>Hard to see, ooh</p>
          <p>The hang ups we have today</p>
          <p>Said we need to strive for more liberty</p>
          <p>Lift yourself upon your feet, let`s get it on</p>
          <p>Lift yourself upon your feet, let`s get it on</p>
          <p>Lift yourself upon your feet, let`s get it on</p>
          <p>Lift yourself upon your feet, let`s get it on</p>
          <p>Lift yourself upon your feet, let`s get it on</p>
          <p>Lift yourself upon your feet, let`s get it on</p>
          <p>Lift yourself upon your feet, let`s get it on</p>
          <p>The hang ups we have today</p>
          <p>Said we need to strive for more liberty</p>
          <p>Lift yourself upon your feet</p>
          <p>Lift yourself upon your feet</p>
          <p>Lift</p>
          <p>Lift your, lift your, lift yourself</p>
          <p>Lift, lift your, lift your, lift your, lift your, lift, lift</p>
          <p>Hard to see, ooh</p>
          <p>The hang ups we have today-ay-ay</p>
          <p>But they don`t really realize, though</p>
          <p>This next verse, this next verse though</p>
          <p>These bars</p>
          <p>Watch this some shit, go</p>
          <p>Poopy-di scoop</p>
          <p>Scoop-diddy-whoop</p>
          <p>Whoop-di-scoop-di-poop</p>
          <p>Poop-di-scoopty</p>
          <p>Scoopty-whoop</p>
          <p>Whoopity-scoop, whoop-poop</p>
          <p>Poop-diddy, whoop-scoop</p>
          <p>Poop, poop</p>
          <p>Scoop-diddy-whoop</p>
          <p>Whoop-diddy-scoop</p>
          <p>Whoop-diddy-scoop, poop</p>
        </div>
      </section>
    </div>
  )
}

export default Lyrics
