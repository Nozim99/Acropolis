'use client'

import {RuIcon, UKIcon, UzIcon} from "@/components/Icons";
import {useState} from "react";
import {createPortal} from "react-dom";

const LanguageSelector = () => {
  const languages = [
    {title: "RU", icon: <RuIcon/>},
    {title: "UZ", icon: <UzIcon/>},
    {title: "EN", icon: <UKIcon/>},
  ]

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].title);


  const changeHandler = (value: string): void => {
    setSelectedLanguage(value)
    setIsOpen(false)
  }


  return (
    <>
      <div className={"relative"}>
        <button onClick={() => setIsOpen(true)} className={"flex items-center gap-x-[8px]"}>
          <span>{selectedLanguage}</span> {languages.find(item => item.title === selectedLanguage)?.icon}
        </button>

        <ul
          className={`${isOpen ? "" : "hidden"} absolute bg-black/60 z-20 right-0 top-[35px]`}>{languages.map(item => (
          <li key={item.title}>
            <button
              onClick={() => changeHandler(item.title)}
              className={"flex items-center gap-[8px] py-[3px] pl-[12px] pr-[20px] hover:bg-black/70 transition-colors"}>{item.title} {item.icon}</button>
          </li>
        ))}</ul>
      </div>
      {
        isOpen &&
        createPortal(<div onClick={() => setIsOpen(false)} className={"fixed inset-0 z-10"}></div>, document.body)
      }
    </>
  )
}

export default LanguageSelector;