import './ComingSoonPage.scss'
import {Messaging} from '../defs'
import mobileImage from '../Images/woman-mobile.jpg'

type ComingSoonProps = {}

export const ComingSoonPage = (props: ComingSoonProps) => {
	return (
		<>
			<div className='primarycontainer'>
				<div className='titlebar'>
					<h1>Foo</h1>
				</div>
			
				<img src={mobileImage} alt='product advertisement' />
				
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