interface BotaoProps{
    cor?: 'green' | 'blue' | 'gray'
    classeName?: string
    children: any
}

export default function Botao(props: BotaoProps){
    const corx = props.cor ?? "gray"
    return(
        <button className={`
        bg-gradient-to-r from-${corx}-400 to-${corx}-700
        text-white px-4 py-2 rounded-md
        ${props.classeName}
        `}>
            {props.children}
        </button>
    )
}