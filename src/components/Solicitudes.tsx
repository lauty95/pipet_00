import axios from 'axios';
import { useEffect, useState } from 'react'
import { Requests } from '../types';
import Item from './Item';
import { BounceLoader } from 'react-spinners'

function Solicitudes() {

    const [dataFromApi, setdataFromApi] = useState<Requests[]>()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(r => setdataFromApi(r.data.slice(0, 10)))
    }, [])

    return (
        <>
            <div className='titulo'>
                <h1>Solicitudes</h1>
            </div>
            <div className='contenedorItems' >
                {
                    dataFromApi ?
                        dataFromApi.map(info => <Item {...info} />)
                        :
                        <div className='loading'>
                            <BounceLoader loading />
                        </div>
                }
            </div>
        </>
    )
}

export default Solicitudes
