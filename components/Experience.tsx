import React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Company from "@/components/Company";

export interface ExperienceProps {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
}

interface TimelineItemProps {
  experience: ExperienceProps;
  isLeft: boolean;
}

const Experience: React.FC<TimelineItemProps> = ({ experience, isLeft }) => {
  return (
    <div className={`flex items-center ${isLeft ? "flex-row-reverse" : ""} mb-8`}>
      <div className={`${isLeft ? "text-right" : ""}`}>
        <Dialog>
          <DialogTrigger asChild={true}>
            <Company title={experience.title} />
          </DialogTrigger>
          <DialogContent className="border-2 border-solid border-black">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold">{experience.title}</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <p>
                <strong>Company:</strong> {experience.company}
              </p>
              <p>
                <strong>Period:</strong> {experience.period}
              </p>
              <p>
                <strong>Description:</strong> {experience.description}
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="w-2/12 flex justify-center relative">
        <div className="w-3 h-3 bg-black rounded-full z-10" />
        <div className={`absolute top-1/2 ${isLeft ? 'left-1/2 right-0' : 'left-0 right-1/2'} border-t-2 border-dotted border-gray-400 -translate-y-1/2`} />
      </div>
    </div>
  );
}

export default Experience;