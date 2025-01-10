import Image from "next/image";
import Title from "@/components/Title";
import {AboutCompanyIcon, MiniOrnament} from "@/components/Icons";

const AboutSection = () => {
  return (
    <section className={""}>
      <div className={"pt-[100px] overflow-hidden container mx-auto relative pb-[60px]"}>
        <div className={"flex flex-col absolute top-1/2 -translate-y-1/2 gap-y-[4px] left-0"}>
          {Array(11).fill(0).map((_, i) => (
            <MiniOrnament key={i}/>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-[41px] relative">
          <div className={"grid justify-center"}>
            <Title title={"О КОМПАНИИ"}/>
            <div className={"relative"}>
              <div className={"absolute -left-[50px] -bottom-[40px]"}>
                <AboutCompanyIcon/>
              </div>
              <Image width={410} height={435} src={"/assets/about-company-image.png"} alt={"members of company"}/>
            </div>
          </div>
          <div className={"flex flex-col justify-between font-light text-2xl"}>
            <p>Наша команда состоит из высококвалифицированных специалистов и обладает богатым опытом работы в ведущих
              международных ИТ-компаниях, крупных банках и телекоммуникационных операторах.</p>
            <p>Мы специализируемся на внедрении комплексных решений для автоматизации бизнес-процессов, создании
              надежной,
              отказоустойчивой и масштабируемой ИТ-инфраструктуры, обеспечении ее безопасности и повышения эффективности
              работы компаний.</p>
            <p>Независимо от сложности задачи, наша команда всегда готова предложить инновационные, высокотехнологичные
              решения, соответствующие вашим потребностям. От аудита и проектирования до внедрения, обучения персонала и
              технической поддержки – мы сопровождаем клиента на всех этапах проекта.</p>
          </div>
        </div>
        <button
          className={"relative py-[10px] w-[360px] block mx-auto mt-[30px] bg-[var(--orange)] hover:bg-yellow-500 rounded-full font-semibold text-lg transition-all"}>Узнать
          подробнее
        </button>
      </div>
    </section>
  )
}

export default AboutSection;