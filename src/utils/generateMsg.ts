const month_names = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr'];

const getDate = () => {
    const date = new Date();
    const day = String(date.getDate()).length === 1 ? `0${date.getDate()}` : date.getDate();
    const month = month_names[date.getMonth()];
    const hours = String(date.getHours()).length === 1 ? `0${date.getHours()}` : date.getHours()
    const minute = String(date.getMinutes()).length === 1 ? `0${date.getMinutes()}` : date.getMinutes();

    return {
        day,
        month,
        hours,
        minute
    };
}

const {
    day,
    month,
    hours,
    minute
} = getDate();

export const generateMessage = (
    {
        name,
        email,
        company,
    }: { name?: string, email?: string, company?: string }
) => {
    return `
  🆕 Зарегистрирован новый клиент❗️
  
  👤 Имя: ${name || "..."}
  📧 Электронная почта: ${email || "..."}
  🏢 Название компании: ${company || "..."}
  ⏰ Время: ${day}-${month}, ${hours}:${minute}`
}