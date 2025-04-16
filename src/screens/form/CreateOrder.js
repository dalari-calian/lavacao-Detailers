import React, { useState } from "react";
import styles from "./CreateOrder.module.css";
import CustomStepper from "../../components/StepperBar/CustomStepper";
import { BtPageNavigate } from "../../components/Buttons/BtPageNavigate";
import { CreateOrderTab1 } from "./CreateOrderTab1"

export function CreateOrder() {
    const [step, setStep] = useState(0);
    const [disableNextStep, setDisableNextStep] = useState(false);
    const [disableBackStep, setDisableBackStep] = useState(true);
    
    const handleNextClick = () => {
        const nextStep = step + 1;
        setStep(nextStep <= 3 ? nextStep : step);
        setDisableBackStep(false);
        setDisableNextStep(nextStep >= 3);
    }

    const handleBackClick = () => {
        const prevStep = step - 1;
        setStep(prevStep >= 0 ? prevStep : step);
        setDisableNextStep(false);
        setDisableBackStep(prevStep <= 0);
    }

    const renderStepComponent = () => {
        switch (step) {
            case 0:
                return <CreateOrderTab1/>;
            case 1:
                return <div>2</div>;
            case 2:
                return <div>3</div>;
            case 3:
                return <div>4</div>;
            default:
                return null;
        }
    };

    return (
        <div className={styles.containerPage}>
            <form className={styles.containerForm}>
                <div className={styles.containerStepperBar}>
                    <CustomStepper activeStep={step}/>
                </div>
                <div className={styles.containerStep}>
                    {renderStepComponent()}
                </div>
                <div className={styles.containerButton}>
                    <BtPageNavigate onClick={handleBackClick} label="Voltar" stepType={0} disable={disableBackStep}/>
                    <BtPageNavigate onClick={handleNextClick} label="Próximo" stepType={1} disable={disableNextStep}/>
                </div>
            </form>
        </div>
    )
}
