interface DailyTaskProps {
  title: string;
  description: string;
  time: string;
}

function DailyTask(props: DailyTaskProps) {
  const { title, description, time } = props;

  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-primary rounded-lg h-48 w-full border-2">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="text-secondary">{description}</p>
      <p>{time}</p>
    </div>
  );
}

export default DailyTask;
