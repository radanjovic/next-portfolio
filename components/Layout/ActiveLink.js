import { useRouter } from "next/router";

export default function ActiveLink({children, link}) {
    const router = useRouter()
    const classes = router.asPath === link ? 'text-white' : 'main-text';

    const handleClick = (e) => {
        e.preventDefault()
        router.push(link)
    }

    return (
        <a href={link} onClick={handleClick} className={`${classes} md:hover:text-white`}>
        {children}
        </a>
    )
}