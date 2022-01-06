import { memo, useMemo } from "react";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import { object, string } from 'yup';
import Button from "@/components/atoms/Button";
import TextField from "@/components/atoms/TextField";
import type FormSchema from "../IFormSchema";
import styles from './Signin.module.css';

type FormValues = {
    readonly email: string;
    readonly password: string;
};

export const formFields: FormSchema<FormValues> = {
    email: {
        name: 'email',
        rules: {
            required: true,
            maxLength: 1000
        }
    },
    password: {
        name: 'password',
        rules: {
            required: true,
            maxLength: 100
        }
    }
};

type Props = Partial<FormValues> & typeof defaultProps;

const defaultProps = {
    email: '',
    password: ''
};

const Signin = (initialValues: Props) => {
    const validationSchema = useMemo(() => object().shape({
        email: string()
            .email()
            .required()
            .max(formFields.email.rules.maxLength),
        password: string()
            .required()
            .max(formFields.password.rules.maxLength)
    }), []);


    const formik = useFormik<FormValues>({
        initialValues,
        validationSchema,
        validateOnMount: true,
        isInitialValid: false,
        onSubmit: async (values, formikHelpers) => {
            console.log('values, formikHelpers => ', values, formikHelpers);
            const result = await signIn('credentials', { redirect: false, ...values });
            console.log('result => ', result);
        }
    });

    return (
        <form className={styles.root} onSubmit={formik.handleSubmit}>
            <TextField
                type='email'
                required
                autoFocus
                maxLength={formFields.email.rules.maxLength}
                placeholder='Enter your email address...'
                id={formFields.email.name}
                name={formFields.email.name}
                value={formik.values.email}
                onChange={formik.handleChange}
            />
            <TextField
                type='password'
                required
                maxLength={formFields.password.rules.maxLength}
                placeholder='Enter your password...'
                id={formFields.password.name}
                name={formFields.password.name}
                value={formik.values.password}
                onChange={formik.handleChange}
            />
            <Button
                type='submit'
                variant='contained'
                width='w-100'
                color='yellow'
                disabled={!formik.isValid || formik.isSubmitting}
            >
                Log in with email
            </Button>
        </form>
    );
};

Signin.defaultProps = defaultProps;

export default memo(Signin);
