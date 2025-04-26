import React, { useState } from "react";
import styles from "./CreateOrderTab1.module.css";
import { InputOrderTab1 } from "../../components/InputText/InputOrderTab1";

export function CreateOrderTab1() {
    
    const [carOrder, setSelectedCarOrder] = useState(0);
    const [colorOrder, setSelectedColorOrder] = useState(0);
    const [licensePlateOrder, setLicensePlateOrder] = useState(0);
    
    const cars = [
        {
            id:1,
            brand: 'Honda',
            model: 'Fit'
        },
        {
            id:2,
            brand: 'Honda',
            model: 'City'
        }
    ]

    const colors = [
        {
            id:1,
            name: 'Preto'
        },
        {
            id:2,
            name: 'Cinza'
        },
        {
            id:3,
            name: 'Prata'
        }
    ]

    const licenses = [
        {
            id:1,
            license: 'QIO-1414'
        },
        {
            id:2,
            license: 'QHO-2120'
        },
        {
            id:3,
            license: 'MER9E34'
        },
        {
            id:4,
            license: 'MMA-2121'
        }
    ]
    
    return (
        <div class={styles.containerContent}>
            <div class={styles.containerInput}>
                <InputOrderTab1 
                    id='carOrder'
                    detail='Veículo'
                    options={cars}
                    value={carOrder}
                    onChange={(e) => setSelectedCarOrder(e.target.value)}
                />
                <InputOrderTab1 
                    id='colorOrder'
                    detail='Cor'
                    options={colors}
                    value={colorOrder}
                    onChange={(e) => setSelectedColorOrder(e.target.value)}
                />
                <InputOrderTab1 
                    id='licensePlateOrder'
                    detail='Placa'
                    options={licenses}
                    value={licensePlateOrder}
                    onChange={(e) => setLicensePlateOrder(e.target.value)}
                />
                <InputOrderTab1 
                    id='carOwnerOrder'
                    detail='Proprietário'
                    value='Ricardo Souza'
                />
            </div>
        </div>
    )
}
