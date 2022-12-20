

const Msg = (props) => {

    console.log(props);
    const {name} =props //* destructiring
  return (
    <div>
        <h3>Merhaba {name}</h3>
        </div>
  )
}

export default Msg