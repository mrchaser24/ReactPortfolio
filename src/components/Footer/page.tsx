import './footer.css'

export default function Footer() {
    return (
        <div className="footer flex flex-col justify-end items-center">
            <div className="logo py-5">CHASE</div>
            <div className="copy-rights w-full flex justify-center py-2">&copy; 2024 CHASE. All rights reserved.</div>
        </div>
    );
}