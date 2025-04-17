'use client'
import Image from "next/image"
import Container from "./Container"
import Link from "next/link"
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react"
import { clsx } from "clsx"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function Cabecalho() {
	const path = usePathname();
	const [hash, setHash] = useState('');

	useEffect(() => {
		const handleHashChange = () => {
			setHash(window.location.hash);
		};

		// Atualiza o hash ao carregar a página e ao mudar o hash
		handleHashChange();
		window.addEventListener('hashchange', handleHashChange);
		window.addEventListener('popstate', handleHashChange);

		return () => {
			window.removeEventListener('hashchange', handleHashChange);
			window.removeEventListener('popstate', handleHashChange);
		};
	}, []);

	return (
		<header className="fixed top-0 left-0 right-0 z-10 flex items-center h-20 bg-black/50 backdrop-blur-lg">
			<Container className="flex-1 flex justify-center sm:justify-between items-center">
				<div className="flex items-center gap-10">
					<Link href="/" className="hidden sm:block">
						<Image src="/logo.png" alt="Logo" width={56} height={25} />
					</Link>
					<nav className="flex items-center gap-6">
						<Link href={ path === '/' ? "#inicio" : "/"} className={clsx("flex items-center gap-2 border-blue-700 hover:text-white", hash === '#inicio' ? "border-b-4 text-white" : "text-zinc-300")} onClick={() => setHash('#inicio')}>
							Incio
						</Link>
						<Link href={ path === '/' ? "#projetos" : "/#projetos"} className={clsx("flex items-center gap-2 border-blue-700 hover:text-white", hash === '#projetos' ? "border-b-4 text-white" : "text-zinc-300")} onClick={() => setHash('#projetos')}>
							Projetos
						</Link>
						<Link href={ path === '/' ? "#curriculo" : "/#curriculo"} className={clsx("flex items-center gap-2 border-blue-700 hover:text-white", hash === '#curriculo' ? "border-b-4 text-white" : "text-zinc-300")} onClick={() => setHash('#curriculo')}>
							Sobre mim
						</Link>
						<Link href="#contact" className={clsx("flex items-center gap-2 border-blue-700 hover:text-white", hash === '#contact' ? "border-b-4 text-white" : "text-zinc-300")} onClick={() => setHash('#contact')}>
							Contato
						</Link>
					</nav>
				</div>
				<div className="flex gap-4 max-sm:hidden">
					<Link href="https://www.linkedin.com/in/-augusto-sousaa" target="_blank">
						<IconBrandLinkedin />
					</Link>

					<Link href="https://github.com/Augusto9237" target="_blank">
						<IconBrandGithub />
					</Link>
					<IconBrandInstagram />
				</div>
			</Container>
		</header>
	)
}
