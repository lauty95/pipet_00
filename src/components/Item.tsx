import { Link } from 'react-router-dom'
import { Requests } from '../types'

function Item({ albumId, id, title, url, thumbnailUrl }: Requests) {
    const fechaDeHoy = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
    return (
        <div className='item' key={id}>
            <div className='izq'>
                <img src={thumbnailUrl} alt="foto" />
                <div className='info'>
                    <h1>{title}</h1>
                    <p>{fechaDeHoy}</p>
                    <p>AlbumId: {albumId}</p>
                </div>
            </div>
            <div className='der'>
                <Link to={`/solicitudes/${id}`}>
                    <div className='boton'>
                        VER
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default Item
