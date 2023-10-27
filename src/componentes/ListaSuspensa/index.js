import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
  console.log(props.iten)

  return (
    <div className='lista-suspensa'>
      <label>{ props.label }</label>
      <select required={ props.required }>
        {props.itens.map(item => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default ListaSuspensa;