import './Home.scss';
import YoutubeLogo from '../img/Black.svg';
import SearchIcon from '../img/search.svg'
import KameraIcon from '../img/phone-18.svg'
import CombinedShape from '../img/Combined Shape.svg'
import QongiroqIcon from '../img/ui-11.svg'
import MyUserImg from '../img/Userpic.svg'
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '../img/ui-71.svg'
import TrendingIcon from '../img/ui-01.svg'
import SubsrictionIcon from '../img/ui-45.svg'
import LibraryIcon from '../img/documents-11.svg'
import HistoryIcon from '../img/others-07.svg'
import GamesIcon from '../img/tech-02.svg'
import MusicIcon from '../img/ui-80.svg'
import LikedIcon from '../img/ui-03.svg'
import FavouritesIcon from '../img/ui-02.svg'
import WatchIcon from '../img/tech-25.svg'
import User1 from '../img/Oval (1).svg'
import User2 from '../img/Oval (2).svg'
import User3 from '../img/Oval (3).svg'
import User4 from '../img/Oval (4).svg'
import User5 from '../img/Oval (5).svg'
import User6 from '../img/Oval (1).png'
import User7 from '../img/Oval.png'
import { Carousel } from 'reactstrap';

function Home() {
    let sunicon = useRef()
    let moonicon = useRef()
    let tyomniy = useRef()
    let redfill = useRef()
    let container = useRef()
    let item = useRef()
    let slider = useRef()
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
          .then((response) => response.json())
          .then((data) => {
            setData(data);
            setLoading(false);
          });
      }, []);
        return (
            <>
            <div ref={container} className="container">
            <header className="header">
                <div className="header__flex-1">
                <img className="header__logo" src={YoutubeLogo} alt="img"/>
                <i ref={sunicon} className="header__sun fa-regular fa-sun" onClick={(e) => {
                    tyomniy.current.classList.toggle('tyomniy')
                    if(tyomniy.current.classList.contains('tyomniy')){
                        moonicon.current.style.display = 'none';
                        e.target.style.display = 'inline-block'
                     }else {
                         moonicon.current.style.display = 'inline-block';
                         e.target.style.display = 'none'
                     }
                 }}/>
                <button className="btn__sun" onClick={() => {
                    tyomniy.current.classList.toggle('tyomniy')
                    if(tyomniy.current.classList.contains('tyomniy')){
                        moonicon.current.style.display = 'none';
                        sunicon.current.style.display = 'inline-block'
                     }else if(!tyomniy.current.classList.contains('tyomniy')){
                         moonicon.current.style.display = 'inline-block';
                         sunicon.current.style.display = 'none'
                     }
                 }}/>
                <i ref={moonicon} className="header__moon fa-regular fa-moon" onClick={(e) => {
                    tyomniy.current.classList.toggle('tyomniy')
                    if(tyomniy.current.classList.contains('tyomniy')){
                     e.target.style.display = 'none';
                     sunicon.current.style.display = 'inline-block'
                 }
             }}/>
                </div>
             <div className="header__flex-2">
             <input className="header__input" type="text" placeholder="Search"/>
             <img className="header__icon" src={SearchIcon} alt="img" />
             </div>
                <div className="header__flex-3">
                <img className="header__kamera" src={KameraIcon} alt="img" />
                <img className="header__shape" src={CombinedShape} alt="img" />
                <img className="header__qongiroq" src={QongiroqIcon} alt="img" />
                <img className="header__user--img" src={MyUserImg} alt="img" />
                </div>
            </header>
            <footer className="footer">
                <div className="footer__flex">
                <ul className="footer__list">
                    <li className="footer__item">
                        <NavLink className="footer__navlink" to="/">
                            <img ref={redfill} className="footer__icon" src={HomeIcon} alt="img" />
                            <h2 className="footer__link">Home</h2>
                            </NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink className="footer__navlink" to="/trending">
                            <img ref={redfill} className="footer__icon left" src={TrendingIcon} alt="img" />
                            <h2 className="footer__link">Trending</h2>
                            </NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink className="footer__navlink" to="/history">
                            <img ref={redfill} className="footer__icon" src={HistoryIcon} alt="img" />
                            <h2 className="footer__link">History</h2>
                            </NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink className="footer__navlink" to="/watch">
                            <img ref={redfill} className="footer__icon right" src={WatchIcon} alt="img" />
                            <h2 className="footer__link">Watch later</h2>
                            </NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink className="footer__navlink" to="/like">
                            <img ref={redfill} className="footer__icon " src={LikedIcon} alt="img" />
                            <h2 className="footer__link">Liked videos</h2>
                            </NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink className="footer__navlink" to="/favourites ">
                            <img ref={redfill} className="footer__icon" src={FavouritesIcon} alt="img" />
                            <h2 className="footer__link">Favourites</h2>
                            </NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink className="footer__navlink" to="/games">
                            <img ref={redfill} className="footer__icon " src={GamesIcon} alt="img" />
                            <h2 className="footer__link">Games</h2>
                            </NavLink>
                    </li>
                </ul>
                <ul className="footer__list2">
                    <h1 className="footer__title1">Subscriptions</h1>
                    <li className="footer__item2">
                        <NavLink className="footer__navlink2" to="/">
                        <img className="footer__img2" src={User1} alt="img" />
                        <h2 className="footer__title">Gussie Singleton</h2>
                        </NavLink>
                    </li>
                    <li className="footer__item2">
                        <NavLink className="footer__navlink2" to="/">
         <img className="footer__img2" src={User5} alt="img" />
                        <h2 className="footer__title">Emma Hanson</h2>
                        </NavLink>
                    </li>
                    <li className="footer__item2">
                        <NavLink className="footer__navlink2" to="/">
                        <img className="footer__img2" src={User4} alt="img" />
                        <h2 className="footer__title">Eunice Cortez</h2>
                        </NavLink>
                    </li>
                </ul>
                </div>
            </footer>
            </div>
            <div ref={tyomniy} className="yarkiy">
                <div className="container">
                <span className="yarkiy__span">
                <img className="yarkiy__img" src={User7} alt="img" />
                <h2 className="yarkiy__title">Dollie Blair</h2>
                </span>
                     {data.length && data.slice(0, 5).map((row) => (
                            <ul className="yarkiy__list">
                         <li className="yarkiy__item" ref={item}>
                             <img className="yarkiy__video" src={row.thumbnailUrl} alt="img"/>
                             <h2 className="yarkiy__text">{row.title}</h2>
                         </li>
                     </ul>
                ))}
                <h2 className="yarkiy__recommended">Recommended</h2>
                {data.length && data.slice(0, 3).map((row) => (
                            <ul ref={slider} className="yarkiy__list2">
                         <li className="yarkiy__item1" ref={item}>
                             <img className="yarkiy__video1" src={row.url} alt="img"/>
                             <h2 className="yarkiy__text">{row.title}</h2>
                         </li>
                     </ul>
                ))}
                <span className="yarkiy__span">
                <img className="yarkiy__img" src={User6} alt="img" />
                <h2 className="yarkiy__title">Food & Drink</h2>
                </span>
                {data.length && data.slice(0, 5).map((row) => (
                            <ul className="yarkiy__list3">
                         <li className="yarkiy__item" ref={item}>
                             <img className="yarkiy__video" src={row.thumbnailUrl} alt="img"/>
                             <h2 className="yarkiy__text">{row.title}</h2>
                         </li>
                     </ul>
                ))}
                </div>
            </div>
            </>
           )
}
export default Home