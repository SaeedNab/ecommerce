import React from "react";
import {Formik} from "formik"



const CustomFormik = ({initialValues,onSubmit,validationSchema,children})=>{
    return <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
    >
        {()=>{
            return <>
                {children}
            </>
        }}
    </Formik>
}

export default CustomFormik