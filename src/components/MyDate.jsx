const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

const MyDate = () => {
  return <div>MyDate is {formatDate(today)}</div>;
};

export default MyDate;
