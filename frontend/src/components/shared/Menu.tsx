"use client"
import { useParams,  } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"
import clsx from "clsx"

export default function Menu() {
	const params = useParams()
	const [hash, setHash] = useState('');

	useEffect(() => {
		setHash(window.location.hash);
	}, [params]); 

	return (
		<nav className="flex gap-6">
			<Link href="#inicio" className={clsx("flex items-center gap-2 border-blue-700 hover:text-white", hash === '#inicio' ? "border-b-4 text-white" : "text-zinc-300")}>
				 Incio
			</Link>
			<Link href="#projetos" className={clsx("flex items-center gap-2 border-blue-700 hover:text-white", hash === '#projetos' ? "border-b-4 text-white" : "text-zinc-300")}>
				Projetos
			</Link>
			<Link href="#curriculo" className={clsx("flex items-center gap-2 border-blue-700 hover:text-white", hash === '#curriculo' ? "border-b-4 text-white" : "text-zinc-300")}>
				Sobre mim
			</Link>
			<Link href="#contact" className={clsx("flex items-center gap-2 border-blue-700 hover:text-white", hash === '#contact' ? "border-b-4 text-white" : "text-zinc-300")}>
				Contato
			</Link>
		</nav>
	)
}

// function MenuItem(props: {
// 	href: string
// 	children: React.ReactNode
// 	novaAba?: boolean
// }) {
	

// 	return (
// 		<Link href={props.href} target={props.novaAba ? "_blank" : "_self"}>
// 			<span
// 				className={`
//                     flex items-center gap-2 border-blue-700 hover:text-white
//                     ${hash === '#curriculo' ? "border-b-4 text-white" : "text-zinc-300"}    
//                 `}
// 			>
// 				{props.children}
// 			</span>
// 		</Link>
// 	)
// }
