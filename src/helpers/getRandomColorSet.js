import { set1, set2, set3, set4, set5, set6 } from "../constants/colors";

export default function getRandomColorSet() {
  return [set1, set2, set3, set4, set5, set6][
    Math.floor(Math.random() * 6)
  ];
}
