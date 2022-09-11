import {useState} from 'react'
import './ComingSoonPage.scss'
import {Messaging} from '../defs'
import mobileImage from '../Images/woman-mobile.jpg'
import desktopImage from '../Images/woman-desktop.jpg'

type ComingSoonProps = {}

export const ComingSoonPage = (props: ComingSoonProps) => {
	const [usersEmail, setUsersEmail] = useState<string>('')
	const [isValidEmail, setIsValidEmail] = useState<boolean>(true)

	function handleGotoCheckout() {
		const minValidLen:number = 6 //a@b.io - Absolute most condensed email possible
		const maxValidLen:number = 128 //Just simply not in the mood to deal with this garbage

		if( (usersEmail.length < minValidLen) || (usersEmail.length >= maxValidLen) ) {
			setIsValidEmail(false)
			return
		}

		const emailRegEx:RegExp = RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")

		if(emailRegEx.test(usersEmail)) {
			setIsValidEmail(true)
		}
		else {
			setIsValidEmail(false)
		}
	}

	function onEmailChange(e: React.FormEvent<HTMLInputElement>) {
		setUsersEmail(e.currentTarget.value)
  }

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

				<div className='email-input'>
					<input type="email" 
							id="email" 
							name="email" 
							onChange={onEmailChange}
							placeholder={Messaging.entryHint} />

					<button onClick={handleGotoCheckout}>
						<img src={require('../Images/icon-arrow.svg').default} alt='Arrow Go'/>
					</button>

					<p className={(isValidEmail === true) ? 'not-visible' : ''}>{Messaging.validEmailPrompt}</p>
				</div>
			</div>
		</>
	)
}