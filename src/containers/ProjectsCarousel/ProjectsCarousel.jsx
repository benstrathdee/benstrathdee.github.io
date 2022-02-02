import styles from "./ProjectsCarousel.module.scss";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import { useContext } from "react";
import { StateContext } from "../../context/StateContext/StateContext";

const ProjectsCarousel = () => {
	const { activeSkill } = useContext(StateContext);

	return (
		<div className={styles.ProjectsCarousel}>
			{activeSkill.projects.map((project, index) => {
				return (
					<CarouselCard key={index} project={project} index={index} />
				);
			})}
		</div>
	);
};

export default ProjectsCarousel;
