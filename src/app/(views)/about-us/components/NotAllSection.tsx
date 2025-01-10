const NotAllSection = () => {
  const cardList = [
    {
      title: "",
      image: "/assets/card-handshake.png",
      width: 1,
      height: 1,
    },
    {
      title: "",
      image: "/assets/card-chart.png",
      width: 1,
      height: 1,
    },
    {
      title: "",
      image: "/assets/",
      width: 1,
      height: 1,
    },
    {
      title: "",
      image: "/assets/",
      width: 1,
      height: 1,
    },
  ]

  return (
    <section>
      <div className={"container mx-auto pt-[23px] pb-[44px] text-[#D8A227]"}>
        <h2 className={"title mb-[32px] text-center"}>ЭТО ЕЩЕ НЕ ВСЁ</h2>
        <p className={"font-light text-2xl mb-[60px]"}>Мы ценим настоящие партнерские отношения, глубоко вникаем в
          бизнес-цели наших заказчиков, чтобы эффективно поддержать их достижения. Применяя комплексный подход к ИТ и
          информационной безопасности, мы создаём решения, которые объединяют инновации с надёжностью. Вместе мы
          ускоряем развитие цифровой экосистемы региона, превращая технологические возможности в реальное преимущество
          для бизнеса.</p>
      </div>
    </section>
  )
}

export default NotAllSection