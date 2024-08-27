export default function Footer() {
    return (
        <footer className="footer footer-center absolute bottom-0 w-full text-base-content p-4">
            <aside>
                <p>
                    Copyright © {new Date().getFullYear()} -
                    Developed by
                    <a
                        className="text-gray-400 hover:text-white mx-2 font-bold"
                        href="https://www.linkedin.com/in/luisplo/">
                        luisplo
                    </a>
                </p>
            </aside>
        </footer>
    )
}