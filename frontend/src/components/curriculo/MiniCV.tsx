import Image from "next/image"
import ButtonDownloadResume from "../button-download"

export default function MiniCV() {
	return (
		<div className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-background border border-zinc-800 rounded-2xl px-6 pt-6">
			<div className="relative min-w-72 h-64 xl:self-end">
				<Image src="/minha-foto.png" alt="Foto de perfil" fill />
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center  md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span
						className="
                            bg-gradient-to-r from-blue-700 via-white to-white
                            text-transparent bg-clip-text text-2xl font-bold
                        "
					>
						Augusto Sousa
					</span>
					<span>Desenvolvedor Full Stack</span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left">
					Sou facisnado por criar experiências de usuário elegantes e intuitivas, com foco em front-end e mobile. Também domino o back-end, o que me permite entregar soluções completas e integradas. Sempre buscando inovação, estou pronto para novos desafios que unam design e funcionalidade
				</p>

				<div>
					<ButtonDownloadResume />
				</div>
			</div>
		</div>
	)
}
