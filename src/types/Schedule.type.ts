type Range = {
  from: string;
  to: string;
}

type Schedule = {
  day: string;
  ranges: Range[];
}

export default Schedule;
