import { Card } from "./card";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import TaskItem from "./taks-item";

const TaskGroup = () => {
  return (
    <Carousel>
      <CarouselContent className="w-full">
        <CarouselItem className="h-auto bg-white500">
          <Card className="flex w-full flex-col gap-4 border-none px-5 py-3">
            <div className="flex items-center justify-start text-xs text-grayBlue">
              <div className="h-1 w-1 rounded-lg bg-blue500"></div>
              <p className="ml-1 italic">Em progresso</p>
            </div>
            <TaskItem />
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="flex w-full flex-col gap-4 border-none px-5 py-3">
            <div className="flex items-center justify-start text-xs text-grayBlue">
              <div className="h-1 w-1 rounded-lg bg-green500"></div>
              <p className="ml-1 italic">Concluido</p>
            </div>
            <TaskItem />
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className="flex w-full flex-col gap-4 border-none px-5 py-3">
            <div className="flex items-center justify-start text-xs text-grayBlue">
              <div className="h-1 w-1 rounded-lg bg-red300"></div>
              <p className="ml-1 italic">Encerrado</p>
            </div>
            <TaskItem />
          </Card>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default TaskGroup;
