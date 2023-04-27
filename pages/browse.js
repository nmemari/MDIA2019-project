import BrowseRecipe from "@/components/BrowseRecipe"
import Image from "next/image"
import { useState } from 'react'
import Router from "next/router"
import { recipe } from "@/data/recipe.js"
import Link from "next/link"
import Head from "next/head"
import styles from "@/styles/Browse.module.css"
import Navbar from "@/components/Navbar"
import Accordion from "@/components/Accordion"

export default function Browse() {
    const [type, setType] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [time, setTime] = useState("");

    const[information, setInformation] = useState (recipe);

    const sendData = (type, cuisine, time) => {
    Router.push({
      pathname: '/results',
      query: {
        type,
        cuisine,
        time
      }
    })
  }
    return (
      <>
        <Head>
          <title>Browse Recipes</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Navbar/>
          <Accordion mealType="Vegan" />
          <Accordion mealType="Pescatarian" />
          <Accordion mealType="Ovo Vegetarian" />      
          <Accordion mealType="Ovo-lacto Vegetarian" />
        </main>
      </>
    )
  }