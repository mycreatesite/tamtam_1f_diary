import React from 'react'
import BgHero from "../../static/img/bg-hero.svg";
import Hero from "../../static/img/hero.svg";
import './scss/hero.scss'

export default (props) => (
	<div className='hero'>
		<div className='bgHero'>
			<BgHero />
		</div>
		<h1 className='heroImage'>
			<Hero />
		</h1>
  </div>
)
