import './Contact.scss';
interface ContactProps {}

export function Contact(props: ContactProps) {
    console.log(props)
    return <div className="Contact">Contact</div>
}
export default Contact