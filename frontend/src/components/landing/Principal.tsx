import { Tecnologia } from "@core"
import Cabecalho from "../shared/Cabecalho"
import Tecnologias from "../tecnologias/Tecnologias"

export interface PrincipalProps {
	tecnologias: Tecnologia[]
}

export default function Principal(props: PrincipalProps) {
	return (
		<div
			className="
                flex flex-col items-center justify-center min-h-screen relative
                bg-[url('/principal.jpg')] bg-cover bg-center bg-blend-multiply
            "
		>
			<Cabecalho />
			<div className="flex-1 w-full flex flex-col justify-center items-center gap-5">
				<div className="flex flex-col items-center gap-1">
					<h1 className="flex gap-3 items-center">
						<span className="w-2 h-2 rounded-full bg-blue-700"></span>
						<span className="text-3xl sm:text-5xl font-bold text-center">
							Augusto Sousa
						</span>
						<span className="w-2 h-2 rounded-full bg-blue-700"></span>
					</h1>
					<h2 className="text-zinc-500 text-center">Desenvolvedor Fullstack</h2>
				</div>
				<Tecnologias lista={props.tecnologias} />
			</div>
			<div className="bg-linear-to-b from-transparent to-black h-28 absolute bottom-0 left-0 right-0"/>
		</div>
	)
}
