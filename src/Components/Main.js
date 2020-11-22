import React, {useContext} from 'react'
import {Formik} from 'formik';
import UserContext from '../Context/UserContext';

const Main = () => {
    const {user, setUser} = useContext(UserContext)

    return (
        <Formik initialValues={{username: user}} onSubmit={(values, {setSubmitting}) => {
            setUser(values.username)
            setTimeout(() => {
                setSubmitting(false)
            }, 1000)
        }}
        >
            {({handleChange, handleSubmit, isSubmitting, values}) => (
                <div>
                    <form className={'ui form'} onSubmit={handleSubmit}>
                        <input
                            name={'username'}
                            value={values.username}
                            onChange={handleChange}
                            placeholder={'Enter username'}
                        />
                        <input
                            className={'ui button primary'}
                            type={'submit'}
                            disabled={isSubmitting}
                        />
                    </form>
                </div>
            )}

        </Formik>
    )
}

export default Main


