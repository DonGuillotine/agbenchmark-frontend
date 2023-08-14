import React from "react";

import tw from "tailwind-styled-components";

import { TaskData } from "../lib/types";

interface TaskInfoProps {
  selectedTask: TaskData | null;
  isTaskInfoExpanded: boolean;
  setIsTaskInfoExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTask: React.Dispatch<React.SetStateAction<TaskData | null>>;
}

const TaskInfo: React.FC<TaskInfoProps> = ({
  selectedTask,
  isTaskInfoExpanded,
  setIsTaskInfoExpanded,
  setSelectedTask,
}) => {
  return (
    <TaskDetails isExpanded={isTaskInfoExpanded}>
      <ToggleButton
        onClick={() => {
          setIsTaskInfoExpanded(!isTaskInfoExpanded);
          setSelectedTask(null);
        }}
      >
        {isTaskInfoExpanded ? "→" : "Click a node to expand"}
      </ToggleButton>
      {selectedTask && (
        <>
          <TaskName>{selectedTask?.name}</TaskName>
          <TaskPrompt>{selectedTask?.task}</TaskPrompt>
          <Detail>
            <b>Cutoff:</b> {selectedTask?.cutoff}
          </Detail>
          <Detail>
            <b>Description:</b> {selectedTask?.info.description}
          </Detail>
          <Detail>
            <b>Difficulty:</b> {selectedTask?.info.difficulty}
          </Detail>
          <Detail>
            <b>Category:</b> {selectedTask?.category}
          </Detail>
        </>
      )}
    </TaskDetails>
  );
};

const TaskDetails = tw.div<{ isExpanded: boolean }>`
  ${(p) => (p.isExpanded ? "w-1/2" : "w-32")}
  ml-5
  transition-all
  duration-500
  ease-in-out
  p-4
  border
  border-gray-400
  h-full
  overflow-hidden
`;

export default TaskInfo;

const ToggleButton = tw.button`
    font-bold
    text-2xl
`;

const TaskName = tw.h1`
    font-bold
    text-2xl
    break-words
`;

const TaskPrompt = tw.p`
    text-gray-900
    break-words
`;
const Detail = tw.p`
    
`;
