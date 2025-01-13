const TitleSection = ({title, className, mb="mb-[15px] xl:mb-[35px] sm:mb-[25px] md:mb-[30px] xl:mb-[35px]"}: { title: string, className?: string, mb?:string }) => {
  return (
    // <h2 className={`${mb} font-extrabold text-5xl relative`}>
    <h2 className={`${mb} font-extrabold text-2xl relative text-center sm:text-3xl md:text-4xl xl:text-5xl lg:text-start`}>
      <div className={"bg-[var(--orange)] w-[50px] h-[4.5px] -top-[22px] absolute hidden lg:block"}></div>
      <span className={className}>{title}</span>
    </h2>
  )
}

export default TitleSection;