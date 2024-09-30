function Button({children,disabled}){
return (<button disabled={disabled} className="inline-block font-semibold rounded-full bg-yellow-400 py-3 px-4 hover:bg-yellow-300 uppercase tracking-wide text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-slate-400 ">{children}</button>
)
}
export default Button;