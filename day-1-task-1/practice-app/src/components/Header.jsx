export default function Header() {
    return (
        <header style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
            <nav>
                <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
                    <li><a href="home">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
