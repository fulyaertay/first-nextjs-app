import Link from "next/link"
export default function Header(){
    return 
        <header>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/blog/about">About</Link></li>
                    <li><Link href="/blog/first-post">Blog</Link></li>

                </ul>
            </nav>
        </header>
    
}