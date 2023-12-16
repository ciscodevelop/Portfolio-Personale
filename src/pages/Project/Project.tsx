import './Project.scss';
interface ProjectProps {}

export function Project(props: ProjectProps) {
    console.log(props)
    return <div className="Project">Project</div>
}
export default Project