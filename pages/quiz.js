import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Quiz.module.css'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import QuestionBoxOne from '@/components/QuestionBoxOne'
import QuestionBoxTwo from '@/components/QuestionBoxTwo'
import QuestionBoxThree from '@/components/QuestionBoxThree'
import { recipe } from '@/data/recipe.js'
import Navbar from '@/components/Navbar'
import ConfirmBox from '@/components/ConfirmBox'

export default function Quiz() {
  const [type, setType] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [time, setTime] = useState('');
  
  const [information, setInformation] = useState (recipe);

  const [isActive, setIsActive] = useState(false);

  const typetoResult = (data) => {
    setType(data);
  }

  const cuisinetoResult = (data) => {
    setCuisine(data);
  }

  const timetoResult = (data) => {
    setTime(data);
  }

  const sendData = () => {
    Router.push({
      pathname: '/results',
      query: {
        type,
        cuisine,
        time
      }
    })
  }

  useEffect(() => {
    if(type != '' && cuisine != '' && time != '') {
      setIsActive(true);
    }
  })

  return (
    <>
      <Head>
        <title>Quiz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar className={styles.navbar} />
        <div className={styles.questionCont} style={{
          display: isActive ? 'none' : 'flex'
        }}>
          <QuestionBoxThree timeData={timetoResult}/>
          <QuestionBoxTwo cuisineData={cuisinetoResult}/>  
          <QuestionBoxOne typeData={typetoResult}/>
        </div>

        <div className={styles.confirmCont} style={{
            display: isActive ? 'flex' : 'none'
          }}>
          {
            information && information.map((info, index) => {
              if (info.type.toLowerCase() === type && info.cuisine.toLowerCase() === cuisine && info.mealType.toLowerCase() === time) {
                return (
                  <ConfirmBox 
                    key={index}
                    type={info.type}
                    cuisine={info.cuisine}
                    time={info.mealType}
                    name={info.name}
                  />
                )
              }
            })
          }
          <button className={styles.resultsBtn} onClick={() => sendData()}>Let's Take a Look!</button>
        </div>
        
      </main>
    </>
  )
}
