import {
  IconBallBowling,
  IconDogBowl,
  IconSearch,
  IconSquareRoundedChevronLeftFilled,
  IconSquareRoundedChevronRightFilled,
} from "@tabler/icons-react";

export const storyIconMap = {
  BallBowling: <IconBallBowling />,
  DogBowl: <IconDogBowl />,
  Search: <IconSearch />,
  SquareRoundedChevronLeftFilled: <IconSquareRoundedChevronLeftFilled />,
  SquareRoundedChevronRightFilled: <IconSquareRoundedChevronRightFilled />,
};

const noneMap = { None: null };

export const storyIconControl = {
  mapping: { ...storyIconMap, ...noneMap },
  options: Object.keys(storyIconMap),
};
