import { useState,Fragment } from 'react';
import './App.css';
import axios from 'axios';
import Button from './components/Button'

const App = () => {
  const [userData,setUserData] = useState([]);
  const [loadin,setLoading] = useState(false);
  const[activeUser,setActiveUser] = useState(false);
  const[activeLink,setActiveLink] = useState(0);

  const onClickHandler = () =>{
      setActiveLink(0);
      setLoading(true);
      axios.get('https://randomuser.me/api/')
      .then((response) =>{
        console.log(response.data.results);
        setUserData(response.data.results);
      }).catch((error) => {
        console.log(error);
        setLoading(true);
      }).finally(()=>{
        setLoading(false);
        setActiveUser(true);
      })
  }
  const icons = [
    "fas fa-user fa-4x",
    "fas fa-envelope fa-4x",
    "fas fa-calendar-alt fa-4x",
    "fas fa-map-marker fa-4x",
    "fas fa-phone fa-4x",
    "fas fa-lock fa-4x",
  ];

  const PhraseGenerator = ({user}) =>{
    const phrases = [
      `Hi my name is ${user.name.first} ${user.name.last}`,
      `My email address is ${user.email}`,
      `I was born on ${user.dob.date.slice(0,10)}`,
      `I'm living ${user.location.city},${user.location.country}`,
      `My phone number is ${user.phone}`,
      `My password is ${user.login.password}`,
    ]
    return <h2>{phrases[activeLink]}</h2>
  }


  const activeLinkHandler =(index) =>{
    setActiveLink(index);
  }
  const style = {
    color:"green",
  }

  return (
    <div className="App">
      <h1>Random User Gnerator App</h1>
      <Button isActive={activeUser} clicked={onClickHandler}/>

          {/* <h1>Loading...</h1> */}

        <div className="app__user">
              {userData.map((user,index) => {
                return(
                  <Fragment key={user.cell}>
                    <img src={user.picture.large} alt="#" />
                    <PhraseGenerator user={user}/>
                    <div className="app__icons">
                      {icons.map((icon,index) =>{
                        return(
                          <i className={icon} key={index} 
                          onMouseOver={()=>activeLinkHandler(index)}
                          style={activeLink === index ? style : null} 
                          ></i>
                        )
                      }
                      )}
                      </div>
                  </Fragment>
                )
              })}
          </div>

    </div>
  );
}

export default App;
