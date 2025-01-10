"use client"

const FormButton = () => {
  const onSubmit = () => {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const companyInput = document.getElementById("company") as HTMLInputElement;

    nameInput.value = "";
    emailInput.value = "";
    companyInput.value = "";
  }

  return (
    <button
      onClick={onSubmit}
      type={"button"}
      className={"bg-white py-[10px] mt-[20px] px-[54px] rounded-[24px] text-lg font-semibold text-[var(--darkBlue)] self-start hover:bg-white/80 transition-all"
      }>Отправить</button>
  )
}

export default FormButton;