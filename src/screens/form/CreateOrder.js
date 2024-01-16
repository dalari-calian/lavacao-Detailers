import React, { useState } from "react";
import styles from "./CreateOrder.module.css"
import CustomStepper from "../../components/StepperBar/CustomStepper";
import { CreateClientPage } from "./CreateClientPage"
import { CreateCarPage } from "./CreateCarPage"

export function CreateOrder() {
    const [step, setStep] = useState(0)
    
    const handleNextClick = () => {
        setStep((prevStep) => (prevStep < 2 ? prevStep + 1 : prevStep));
        //setStep(step<3 ? step+1 : step)
    }

    const handleBackClick = () => {
        setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
        //setStep(step>0 ? step-1 : step)
    }

    const renderStepComponent = () => {
        switch (step) {
          case 1:
            return <CreateClientPage />;
          case 2:
            return <CreateCarPage />;
          default:
            return null;
        }
    };

    return (
        <div className={ styles.containerPage }>
            <form className={ styles.containerForm }>
                <div className={ styles.containerStepperBar }>
                    <CustomStepper activeStep={step}/>
                </div>
                <div className={ styles.containerInput }>
                    {
                        renderStepComponent()
                    }
                </div>
                <div className={ styles.containerButton }>
                    <button type="button" onClick={handleNextClick}>Próximo</button>
                    <button type="button" onClick={handleBackClick}>Volta</button>
                </div>
            </form>
        </div>
    )
}