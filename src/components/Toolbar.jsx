const AlertButton = ({children, message}) => {
    return <button className="bg-sky-300 py-2 px-3 mr-2 rounded" onClick={() => alert(message)}>{children}</button>
}

const Toolbar = () => {
  return (
    <div>
        <AlertButton message="Hello Rana">Hello</AlertButton>
        <AlertButton message="Goodbye Rana">Goodbye</AlertButton>
    </div>
  )
}

export default Toolbar