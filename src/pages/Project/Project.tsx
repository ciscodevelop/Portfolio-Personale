import './Project.scss';
interface ProjectProps {}

function Project(props: ProjectProps) {
    console.log(props)
    return <div className="Project">Project</div>
}
export default Project