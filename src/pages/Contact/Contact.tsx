import './Contact.scss';
interface ContactProps {}

function Contact(props: ContactProps) {
    console.log(props)
    return <div className="Contact">Contact</div>
}
export default Contact