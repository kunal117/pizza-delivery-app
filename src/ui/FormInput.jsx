function FormInput({ type, name }) {
  return (
    <input
      className=" w-full rounded-full px-4 py-2 border border-stone-200 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 w-full md:px-6 md:py-3"
      type={type}
      name={name}
      required
    />
  );
}
export default FormInput;
