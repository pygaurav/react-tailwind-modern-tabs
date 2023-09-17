import { faBook, faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import { books, apps, movies } from "../api/things";
import LabelWithIcon from "../components/shared/LabelWithIcon";
import { faAppStoreIos } from "@fortawesome/free-brands-svg-icons";
import Display from "../components/Display";

const iconComponent = {
  book: <FontAwesomeIcon icon={faBook} fontSize={20} />,
  movie: <FontAwesomeIcon icon={faFilm} fontSize={20} />,
  apps: <FontAwesomeIcon icon={faAppStoreIos} fontSize={20} />,
};

export interface TabInfoType {
  id: string;
  text: string | ReactNode;
  content: string | ReactNode;
}

export const tabsInfo: TabInfoType[] = [
  {
    id: "tab-0",
    text: <LabelWithIcon iconComponent={iconComponent.apps} label="Apps" />,
    content: <Display things={apps}/>,
  },
  {
    id: "tab-1",
    text: <LabelWithIcon iconComponent={iconComponent.movie} label="Movies" />,
    content: <Display things={movies}/>,
  },
  {
    id: "tab-2",
    text: <LabelWithIcon iconComponent={iconComponent.book} label="Books" />,
    content: <Display things={books}/>,
  },
];
