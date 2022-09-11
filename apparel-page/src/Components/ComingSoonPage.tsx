import './ComingSoonPage.scss'
import {Messaging} from '../defs'
import mobileImage from '../Images/woman-mobile.jpg'
import desktopImage from '../Images/woman-desktop.jpg'

type ComingSoonProps = {}

export const ComingSoonPage = (props: ComingSoonProps) => {
	return (
		<>
			<div className='primarycontainer'>
				<div className='titlebar'>
					<img src={require('../Images/brandLogo.svg').default} alt='mySvgImage' height={22} />
				</div>

				<picture>
					<source srcSet={desktopImage} media="(min-width:701px)"/>
					<img src={mobileImage} alt="product advertisement" />
				</picture>

				<article>
					<header>
						<div>{Messaging.title}</div>
						<div>{Messaging.titlePunch}</div>
					</header>
					<p>{Messaging.message}</p>
				</article>
				
				<input type="email" id="email" name="email" placeholder={Messaging.entryHint} />
			</div>
		</>
	)
}