import moment from "moment";

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const getInitials = (name) => {
  if (!name) return "";

  const words = name.split(" ");
  let initials = "";

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0];
  }
  return initials.toUpperCase();
};

export const addThousandsSeparator = (number) => {
  if (number === null || isNaN(number)) return "";
  const [integerPart, fractionalPart] = number.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return fractionalPart
    ? `${formattedInteger}.${fractionalPart}`
    : formattedInteger;
};


export const addThousandsSeparatorChartBarCircle = (value) => {
   if (!value) return "";
  const cleaned = String(value).replace(/[^0-9.-]/g, ""); // ลบ $ , ช่องว่าง ฯลฯ
  const number = Number(cleaned);
  if (isNaN(number)) return "";

  const [integerPart, fractionalPart] = number.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

   const result = fractionalPart
    ? `${formattedInteger}.${fractionalPart}`
    : formattedInteger;

  return `$${result}`;
}

export const prepareExpenseBarChartData = (data = []) => {
  const chartData = data.map((item) => ({
    category: item?.category,
    amount: item?.amount,
  }));
  return chartData;
};

export const prepareIncomeBarChartData = (data = []) => {
  const sortData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date),
  );
  const chartData = sortData.map((item) => ({
    category: moment(item?.date).format("Do MMM"),
    amount: item?.amount,
    source: item?.source,
  }));
  return chartData;
};

export const prepareExpanseLineChartData = (data = []) => {
  const sortData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date),
  );
  const chartData = sortData.map((item) => ({
    month: moment(item?.date).format("Do MMM"),
    amount: item?.amount,
    category: item?.category,
  }));
  return chartData;
};
