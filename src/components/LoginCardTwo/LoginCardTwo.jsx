import { useState , useEffect } from 'react'
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import './LoginCardTwo.css'
export default function LoginCardTwo() {

    const [email , setEmail] = useState(() => {
        let localData = localStorage.getItem("email")
        if(localData){
            return localData
        }
        return " "
    })
    useEffect(()=>{
        localStorage.setItem("email" , email)
    } , [email])
    return (
        <>
            <div className="LoginCardTwo">
                <div className="LoginCardTwo__wrapper">
                    <div className="LoginCardTwo__container">
                        <div className="LoginCardTwo__top">
                            <div className="LoginCardTwo__top__imags">
                                <img className='LoginCardTwo__top__imag' src="/assts/images/welcom.png" alt="" />
                            </div>
                            <div className="LoginCardTwo__top__form">
                                <div className="LoginCardTwo__top__form__infos">
                                    <span className='LoginCardTwo__top__form__infos__title'>
                                        Welcome
                                    </span>
                                    <span className='LoginCardTwo__top__form__infos__parag'>By signing in you are agreeing our <span className='LoginCardTwo__top__form__infos__parag__link'>Term and privacy policy</span> </span>
                                </div>
                                <div className="LoginCardTwo__top__form__inputs">
                                    <form action="#">
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='LoginCardTwo__top__form__input' type="text" placeholder='Email Address' />
                                        <input className='LoginCardTwo__top__form__input' type="text" placeholder='Password' />
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="LoginCardTwo__wrapper__polygan">
                        <div className="LoginCardTwo__wrapper__polygan__checkBoxs">
                            <span>Remember password</span>
                            <form action="#">
                                <input type="checkbox" className='LoginCardTwo__wrapper__polygan__checkBox' name="" id="" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="LoginCardTwo__wrapper__bottom">
                    <div className="LoginCardTwo__wrapper__bottom__polygan">
                        <span>Forget password</span>
                    </div>

                    <div className="LoginCardTwo__bottom">
                        <div className="LoginCardTwo__bottom__top">
                            <div className="LoginCardTwo__bottom__top__btns">
                                <button>Login</button>
                                <button>Register</button>
                            </div>
                        </div>
                        <div className="LoginCardTwo__bottom__midle">
                            <span>Login wit touch ID</span>
                            <div className="LoginCardTwo__bottom__midle__btns">
                                <FingerprintIcon className='touch_icon' />
                            </div>
                        </div>
                        <div className="LoginCardTwo__bottom__bottom">
                            <span>
                                or connect with
                            </span>
                            <div className="LoginCardTwo__bottom__bottom__cards">
                                <div className="LoginCardTwo__bottom__bottom__card">
                                    <FacebookIcon className='icon' />
                                </div>
                                <div className="LoginCardTwo__bottom__bottom__card">
                                    <InstagramIcon className='icon' />
                                </div>
                                <div className="LoginCardTwo__bottom__bottom__card">
                                    <LinkedInIcon className='icon' />
                                </div>
                                <div className="LoginCardTwo__bottom__bottom__card">
                                    <LinkedInIcon className='icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
