import { Task } from "@prisma/client";
import { Card } from "./card";

const TaskItem = (props: Task) => {
  return (
    <Card className="flex h-full min-h-52 w-full flex-col justify-center gap-4 bg-white p-3 italic">
      <h1 className="ml-2 text-xl font-semibold text-grayBlue">Task</h1>
      <p className="text-md ml-2 w-full font-normal text-gray500">
        Lorem ipsum dolor sit. Lorem ipsum dolor sitLorem ipsum dolor sitLorem
        ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit.
      </p>
      <div className="ml-2 w-[50px] rounded-2xl bg-blue500 px-2 py-1">
        <p className="text-center text-xs font-bold text-white500">15/01</p>
      </div>
    </Card>
  );
};

export default TaskItem;
