type ValidationRuleTypes =
    | 'required'
    | 'maxLength';

type ValidationRules<T extends ValidationRuleTypes> = Required<
    Pick<
        Readonly<{
            required?: boolean;
            maxLength?: number;
        }>,
        T
    >
>;

type FormSchema<F extends {}, T extends ValidationRuleTypes = ValidationRuleTypes> = {
    readonly [K in keyof F]: Readonly<{
        name: K;
        rules: ValidationRules<T>;
    }>
};

export default FormSchema;
