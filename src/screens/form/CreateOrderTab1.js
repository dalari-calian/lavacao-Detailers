import React, { useState } from "react";
import styles from "./CreateOrderTab1.module.css";
import { InputOrderTab1 } from "../../components/InputText/InputOrderTab1";

export function CreateOrderTab1() {
    return (
        <div className={styles.containerOrder}>
            <InputOrderTab1 
                id="idCar"
                detail="Veículo"
            />
        </div>
    )
}
